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

// getDriver
exports.getMeDriver = async (req, res) => {
  const user_id = req.user._id;

  try {
    const driver = await Driver.find({ user_id });

    if (driver.length === 0) {
      // If no data found, return null
      return res.status(200).json({
        status: "success",
        data: null,
      });
    }
    res.status(200).json({
      status: "success",
      data: driver,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

//createDriver
exports.createDriver = async (req, res) => {
  const user_id = req.user._id;
  const {
    car_model,
    car_number,
    car_color,
    driver_address,
    driver_occupation,
    driver_workplace,
    verified,
  } = req.body;

  try {
    const driver = await Driver.addDriver(
      user_id,
      car_model,
      car_number,
      car_color,
      driver_address,
      driver_occupation,
      driver_workplace,
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
