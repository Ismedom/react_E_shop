//

const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    rating: {
        required: true,
        type: Number,
    },
});

const ratings = mongoose.model("rating", ratingSchema);

module.exports = ratings;
