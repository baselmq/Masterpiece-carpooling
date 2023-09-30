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
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    image: {
      type: String,
    },
    gender: {
      type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// -----------------new static login method -----------------
userSchema.statics.login = async function (identifier, password) {
  // Validation
  if (!identifier || !password) {
    throw Error("All fields must be filled");
  }

  // Determine whether the identifier is an email or phone
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
  const userQuery = isEmail ? { email: identifier } : { phone: identifier };

  const user = await this.findOne(userQuery).select("+password");

  if (!user) {
    throw Error("Incorrect email or phone number or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect email or phone number or password");
  }

  return user;
};
// -----------------new static signup method -----------------
userSchema.statics.addUser = async function (
  username,
  email,
  phone,
  password,
  image,
  gender
) {
  //validation
  if (!username || !email || !phone || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not Strong enough");
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email Already in use");
  }

  const user = await this.create({
    username,
    email,
    phone,
    password,
    image,
    gender,
  });

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
