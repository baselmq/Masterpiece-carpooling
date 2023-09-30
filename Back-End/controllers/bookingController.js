const Booking = require("../models/bookingModel");

// ----------------- get All Booking -----------------
exports.getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({
      status: "success",
      results: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

//createBooking
exports.createBooking = async (req, res) => {
  const { user_id, driver_id, trip_id } = req.body;

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
