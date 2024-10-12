//
const product = require("../../../models/product");
const rating = require("../../../models/rating");
const admin = require("firebase-admin");
const escape = require("escape-html");

const productDetails = async (req, res) => {
    const id = escape(req.params.id);
    try {
        const ratingArr = await rating.find({ id });
        const productInfor = await product.findOne({ id });

        if (!productInfor) return res.status(404).json({ message: "Product not found" });

        const bucket = admin.storage().bucket();
        const file = bucket.file(productInfor.imageUrl);

        const [exists] = await file.exists();
        if (!exists) {
            return res.status(404).send("Image not found");
        }

        const [url] = await file.getSignedUrl({
            action: "read",
            expires: Date.now() + 60 * 60 * 1000,
        });

        const productDetailsInformation = {
            ...productInfor.toObject(),
            imageUrl: url,
            ratingCount: ratingArr.length,
        };

        res.json(productDetailsInformation);
    } catch (err) {
        res.status(500).json({ message: "An error have founded", err: err.message });
    }
};

module.exports = productDetails;
