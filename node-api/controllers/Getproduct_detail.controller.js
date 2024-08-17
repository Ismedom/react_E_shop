//
const product = require("../models/product");
const rating = require("../models/rating");

const productDetails = async (req, res) => {
  let averageStaring = 0;
  try {
    const id = 12;

    if (isNaN(id)) return res.status(400).json({ message: "Id must be number as expect" });

    const ratingArr = await rating.find({ id });
    const productInfor = await product.findOne({ id });
    //
    if (!productInfor) return res.status(404).json({ message: "Product not found" });
    if (!(ratingArr.length > 0)) return res.json({ information: "cannot found any data, " });

    //
    const totalStaring = ratingArr.reduce((accumulator, item) => {
      return accumulator + item.rating;
    }, 0);
    averageStaring = totalStaring / ratingArr.length;

    //
    const productDetailsInformation = {
      ...productInfor.toObject(),
      ratings: averageStaring,
      ratingCount: ratingArr.length,
      reviews: ratingArr,
    };

    res.json(productDetailsInformation);
  } catch (err) {
    res.status(500).json({ message: "An error have founded", err: err.message });
  }
};

module.exports = productDetails;
