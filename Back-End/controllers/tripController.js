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
};

//createTrip
exports.createTrip = async (req, res) => {
  const {
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
      travel_time,
      travel_distance
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
