//
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  price: Number,
  description: String,
  type: String,
  imageUrl: String,
  stock: Number,
  ratings: {
    default: 0,
    type: Number,
  },
});

const product = mongoose.model("products", productSchema);
module.exports = product;
