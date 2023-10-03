const Booking = require("../models/bookingModel");
const Trip = require("../models/tripModel");
const Driver = require("../models/driverModel");
const User = require("../models/userModel");

// ----------------- get All Booking -----------------
exports.getAllBooking = async (req, res) => {
  const user_id = req.user._id;
  try {
    const bookings = await Booking.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      results: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

exports.getMeBooking = async (req, res) => {
  const userId = req.user._id;

  try {
    const bookings = await Booking.find({ user_id: userId }).select(
      "-updatedAt -createdAt -__v"
    );

    if (bookings.length === 0) {
      return res.status(200).json({
        status: "success",
        data: null,
      });
    }

    const results = await Promise.all(
      bookings.map(async (booking) => {
        try {
          const trip = await Trip.findById(booking.trip_id).select(
            "-_id -updatedAt -createdAt -__v"
          );
          const driver = await Driver.findById(booking.driver_id).select(
            "-_id -updatedAt -createdAt -__v -verified -driver_address -driver_occupation -driver_workplace"
          );
          const driverId = await Driver.findById(booking.driver_id);

          const userDriver = await User.findById(driverId.user_id).select(
            "-_id -updatedAt -createdAt -__v"
          );
          console.log(userDriver);
          const data = {
            ...booking.toObject(),
            ...trip.toObject(),
            ...driver.toObject(),
            ...userDriver.toObject(),
          };
          return data;
        } catch (error) {
          console.error(`Error processing element: ${booking}`, error);
          throw error; // Re-throw the error to handle it later if needed
        }
      })
    );

    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

//createBooking
exports.createBooking = async (req, res) => {
  const user_id = req.user._id;
  const { driver_id, trip_id } = req.body;

  try {
    const booking = await Booking.addBooking(user_id, driver_id, trip_id);
    res.status(200).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getBooking
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

// updateBooking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};
// deleteBooking
exports.deleteBooking = async (req, res) => {
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
