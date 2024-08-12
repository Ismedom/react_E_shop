const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  rating: Number,
});

const rating = mongoose.model("rating", ratingSchema);
module.exports = rating;
