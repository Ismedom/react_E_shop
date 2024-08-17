//

const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  rating: {
    required: true,
    type: Number,
  },
});

const ratings = mongoose.model("rating", ratingSchema);

module.exports = ratings;
