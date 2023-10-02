const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  user_id: String,
  filename: String,
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
