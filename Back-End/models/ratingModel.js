const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    driver_id: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    rate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
ratingSchema.statics.addRating = async function (
  user_id,
  driver_id,
  comments,
  rate
) {
  //validation
  if (!user_id || !driver_id || !rate) {
    throw Error("All fields must be filled");
  }
  //   const user = await this.findOne({ user_id });
  //   const driver = await this.findOne({ driver_id });

  //   if (user && driver) {
  //     throw Error("You cannot evaluate again");
  //   }

  const rating = await this.create({
    user_id,
    driver_id,
    comments,
    rate,
  });

  return rating;
};

module.exports = mongoose.model("Rating", ratingSchema);
