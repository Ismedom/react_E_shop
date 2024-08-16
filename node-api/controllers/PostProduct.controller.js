const Product = require("../models/product");

const postProduct = async (req, res) => {
  try {
    const { id, name, price, description, type, imageUrl, stock, ratings } = req.body;
    const item = new Product({
      id,
      name,
      price,
      description,
      type,
      imageUrl,
      stock,
      ratings,
    });

    const savedItem = await item.save();
    res.status(201 || 200).json(savedItem);
    //
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!", details: error.message });
  }
};

module.exports = postProduct;
