//
const mongoose = require("mongoose");

const productDetailInforSchema = new mongoose.Schema({
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
  ratings: Number,
});

const productDetailInfor = mongoose.model("productDetailInfor", productDetailInforSchema);
module.exports = productDetailInfor;
