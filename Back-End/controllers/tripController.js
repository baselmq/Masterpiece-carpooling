const { default: mongoose } = require("mongoose");
const Trip = require("../models/tripModel");

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
    const results = await Trip.find({
      "destination.description": destination,
      "origin.description": origin,
      date,
    });

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
