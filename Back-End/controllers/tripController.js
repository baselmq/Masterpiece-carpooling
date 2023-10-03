const { default: mongoose } = require("mongoose");
const Trip = require("../models/tripModel");
const User = require("../models/userModel");
const Driver = require("../models/driverModel");

// ----------------- get All Trips -----------------
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json({
      status: "success",
      results: trips.length,
      data: trips,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
  s;
};

exports.searchTrips = async (req, res) => {
  const { date, origin, destination } = req.query;

  try {
    const trip = await Trip.find({
      "destination.description": destination,
      "origin.description": origin,
      date,
    }).select(" -updatedAt -createdAt -__v");
    const results = await Promise.all(
      trip.map(async (res) => {
        try {
          const user = await User.findById(res.user_id).select(
            "-_id -updatedAt -createdAt -__v"
          );
          const driver = await Driver.findById(res.driver_id).select(
            "-_id -updatedAt -createdAt -__v"
          );
          const data = {
            ...res.toObject(),
            ...user.toObject(),
            ...driver.toObject(),
          };
          return data;
        } catch (error) {
          console.error(`Error processing element: ${res}`, error);
          throw error; // Re-throw the error to handle it later if needed
        }
      })
    );

    return res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    return res.status(404).json({ status: "fail", message: error.message });
  }
};

//createTrip
exports.createTrip = async (req, res) => {
  const user_id = req.user._id;

  const {
    driver_id,
    date,
    time,
    price,
    seats,
    origin,
    destination,
    travel_time,
  } = req.body;

  try {
    const trip = await Trip.addTrip(
      user_id,
      driver_id,
      date,
      time,
      price,
      seats,
      origin,
      destination,
      travel_time
    );
    res.status(200).json({
      status: "success",
      data: trip,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getTrip
exports.getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: trip,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

// updateTrip
exports.updateTrip = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Trip" });
  }
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: trip,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};
// deleteTrip
exports.deleteTrip = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Trip" });
  }
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
