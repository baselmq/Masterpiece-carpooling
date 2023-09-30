const Driver = require("../models/driverModel");

// ----------------- get All Drivers -----------------
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json({
      status: "success",
      results: drivers.length,
      data: drivers,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

//createDriver
exports.createDriver = async (req, res) => {
  const { user_id, car_model, car_number, car_color, verified } = req.body;

  try {
    const driver = await Driver.addDriver(
      user_id,
      car_model,
      car_number,
      car_color,
      verified
    );
    res.status(200).json({
      status: "success",
      data: driver,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getDriver
exports.getDriver = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: driver,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

// updateDriver
exports.updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: driver,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};
// deleteDriver
exports.deleteDriver = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
