const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    car_model: {
      type: String,
      required: true,
    },
    car_number: {
      type: String,
      required: true,
    },
    car_color: {
      type: String,
      required: true,
    },
    driver_address: {
      type: String,
      required: true,
    },
    driver_occupation: {
      type: String,
      required: true,
    },
    driver_workplace: {
      type: String,
      required: true,
    },
    verified: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
driverSchema.statics.addDriver = async function (
  user_id,
  car_model,
  car_number,
  car_color,
  driver_address,
  driver_occupation,
  driver_workplace,
  verified
) {
  //validation
  if (
    !user_id ||
    !car_model ||
    !car_number ||
    !car_color ||
    !verified ||
    !driver_address ||
    !driver_occupation ||
    !driver_workplace
  ) {
    throw Error("All fields must be filled");
  }

  const exist = await this.findOne({ user_id });

  if (exist) {
    throw Error("User Already in use");
  }

  const driver = await this.create({
    user_id,
    car_model,
    car_number,
    car_color,
    driver_address,
    driver_occupation,
    driver_workplace,
    verified,
  });

  return driver;
};

module.exports = mongoose.model("Drivers", driverSchema);
