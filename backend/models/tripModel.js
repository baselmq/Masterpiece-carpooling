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
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    travel_time: {
      type: String,
      required: true,
    },
    travel_distance: {
      type: String,
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
  travel_time,
  travel_distance
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
    !travel_time ||
    !travel_distance
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
    travel_distance,
  });

  return trip;
};

module.exports = mongoose.model("Trips", tripSchema);
