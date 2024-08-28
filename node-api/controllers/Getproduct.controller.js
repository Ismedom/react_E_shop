const Product = require("../models/product");
const admin = require("firebase-admin");

const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const bucket = admin.storage().bucket();
    const items = await Product.find().limit(limit);

    const productWithImages = await Promise.all(
      items.map(async (item) => {
        const [files] = await bucket.getFiles({ prefix: item.imageUrl });

        if (files.length > 0) {
          const [url] = await files[0].getSignedUrl({
            action: "read",
            expires: Date.now() + 60 * 60 * 1000,
          });
          return { ...item.toObject(), imageUrl: url };
        }
        return item.toObject();
      })
    );

    res.json({
      products: productWithImages,
      // currentPage: page,
    });
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
};

module.exports = getProducts;
