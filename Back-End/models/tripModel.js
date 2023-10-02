const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    driver_id: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    seats: {
      type: String,
      required: true,
    },
    origin: {
      type: Object,
      required: true,
    },
    destination: {
      type: Object,
      required: true,
    },
    travel_time: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
tripSchema.statics.addTrip = async function (
  user_id,
  driver_id,
  date,
  time,
  price,
  seats,
  origin,
  destination,
  travel_time
) {
  // Validation
  if (
    !user_id ||
    !driver_id ||
    !date ||
    !time ||
    !price ||
    !seats ||
    !origin ||
    !destination ||
    !travel_time
  ) {
    throw Error("All fields must be filled");
  }

  // Check if a trip with the same date and time already exists
  const existingTrip = await this.findOne({ driver_id, date, time });

  if (existingTrip) {
    throw Error("A trip with the same date and time already exists.");
  }

  // Create a new trip
  const trip = await this.create({
    user_id,
    driver_id,
    date,
    time,
    price,
    seats,
    origin,
    destination,
    travel_time,
  });

  return trip;
};

module.exports = mongoose.model("Trips", tripSchema);
