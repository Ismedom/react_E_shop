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
});

const product = mongoose.model("product", productSchema);
module.exports = product;
