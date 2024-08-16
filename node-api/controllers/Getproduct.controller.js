const Product = require("../models/product");

const getProducts = async (req, res) => {
  //
  try {
    const items = await Product.find().limit(20);
    res.status(200 || 201).json(items);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!", details: error.message });
  }
  //
};

module.exports = getProducts;
