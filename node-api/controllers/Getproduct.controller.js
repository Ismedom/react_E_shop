const Product = require("../models/product");

const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  //
  try {
    const items = await Product.find().limit(limit);
    res.status(200 || 201).json(items);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!", details: error.message });
  }
  //
};

module.exports = getProducts;
