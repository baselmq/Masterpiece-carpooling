const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    driver_id: {
      type: String,
      required: true,
    },
    trip_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method

bookingSchema.statics.addBooking = async function (
  user_id,
  driver_id,
  trip_id
) {
  // Validation
  if (!user_id || !driver_id || !trip_id) {
    throw Error("All fields must be filled");
  }

  // Check if a booking already exists for this user and driver
  const existingBooking = await this.findOne({
    user_id,
    driver_id,
    trip_id,
  });

  if (existingBooking) {
    // A booking already exists for this user and driver
    throw Error(`You have already made a reservation with this driver.`);
  } else {
    // Create a new booking
    const booking = await this.create({
      user_id,
      driver_id,
      trip_id,
    });
    return booking;
  }
};
// bookingSchema.statics.addBooking = async function (
//   user_id,
//   driver_id,
//   trip_id
// ) {
//   //validation
//   if (!user_id || !driver_id || !trip_id) {
//     throw Error("All fields must be filled");
//   }

//   const booking = await this.create({
//     user_id,
//     driver_id,
//     trip_id,
//   });

//   return booking;
// };

module.exports = mongoose.model("Booking", bookingSchema);
