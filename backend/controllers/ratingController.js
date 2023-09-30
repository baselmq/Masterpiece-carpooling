const Rating = require("../models/ratingModel");

// ----------------- get All Ratings -----------------
exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json({
      status: "success",
      results: ratings.length,
      data: ratings,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

//createRating
exports.createRating = async (req, res) => {
  const { user_id, driver_id, comments, rate } = req.body;

  try {
    const rating = await Rating.addRating(user_id, driver_id, comments, rate);
    res.status(200).json({
      status: "success",
      data: rating,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getRating
exports.getRating = async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: rating,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

// updateRating
exports.updateRating = async (req, res) => {
  try {
    const rating = await Rating.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: rating,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};
// deleteRating
exports.deleteRating = async (req, res) => {
  try {
    await Rating.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
