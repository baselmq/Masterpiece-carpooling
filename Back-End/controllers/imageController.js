// const Booking = require("../models/bookingModel");
const Image = require("../models/imageModel");

exports.getPhotosByUser = async (req, res) => {
  const user_id = req.user._id;

  try {
    const image = await Image.find({ user_id });
    res.json(image);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.uploadImage = async (req, res) => {
  const user_id = req.user._id;
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const image = new Image({
    user_id: user_id,
    filename: req.file.originalname,
    data: req.file.buffer,
    contentType: req.file.mimetype,
  });

  try {
    await image.save();
    res.status(201).send("Image uploaded successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error.");
  }
};

// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../images"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });
// //uploadImage
// exports.uploadImage = async (req, res) => {};
