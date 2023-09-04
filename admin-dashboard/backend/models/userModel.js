const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// -----------------new static login method -----------------
userSchema.statics.login = async function (email, password, isAdmin = false) {
  //validation

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email }).select("+password");

  if (!user) {
    throw Error("Incorrect email or password");
  }

  if (isAdmin && user.role !== "admin") {
    throw new Error("You do not have admin privileges");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect email or password bcrypt");
  }

  return user;
};

// -----------------new static signup method -----------------
userSchema.statics.addUser = async function (
  username,
  email,
  password,
  role = "user"
) {
  //validation
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not Strong enough");
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email Already in use");
  }

  const user = await this.create({ username, email, password, role });

  return user;
};
// ----------------- Forgot Password -----------------
userSchema.statics.forgot = async function (email) {
  //validation
  if (!email) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  return user;
};

// ----------------- save -----------------
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10); //the higher the number the more secure
  this.password = await bcrypt.hash(this.password, salt); //it will save the new password in the password field
  next(); //save the new password
});

// ----------------- Reset Password Token -----------------
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  //hashing the token
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); //10 minutes, 60 seconds, 1000 milliseconds,
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
