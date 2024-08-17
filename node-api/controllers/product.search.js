//
const product = require("../models/product");

const productSearchByDes = async (req, res) => {
  const description = req.body.description.trim().toLowercase();
  const productFoundByDes = await product.find({
    description: { $regex: description, $options: "i" },
  });
  return res.json(productFoundByDes);
};
//
const productSearchById = async (req, res) => {
  const id = req.body.id;
  const productFoundById = await product.findOne({ id });
  return res.json(productFoundById);
};
//
const productSearchByType = async (req, res) => {
  const type = req.body.type.trim().toLowercase();
  const productFoundByType = await product.find({
    type,
  });
  return res.json(productFoundByType);
};
//
const productSearchByName = async (req, res) => {
  const name = req.body.name.trim().toLowercase();
  const productFoundByName = await product.find({
    name: { $regex: name, $options: "i" },
  });
  return res.json(productFoundByName);
};
//
const productSearchByEQPrice = async (req, res) => {
  const price = req.body.price;
  const productFoundByEQPrice = await product.find({
    price,
  });
  return res.json(productFoundByEQPrice);
};
//
const productSearchByPrice = async (req, res) => {
  const price = req.body.price;
  const productFoundbyPrice = await product.find({
    price: { $gt: 100, $lt: 300 },
  });
  return res.json(productFoundbyPrice);
};

module.exports = {
  productSearchByDes,
  productSearchById,
  productSearchByType,
  productSearchByName,
  productSearchByEQPrice,
  productSearchByPrice,
};
