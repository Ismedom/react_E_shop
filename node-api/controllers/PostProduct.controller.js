const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { bucket } = require("../utils/firebaseConfig");
const generateRandomString = require("../utils/generateId");
const escape = require("escape-html");

const postProduct = async (req, res) => {
    const { name, price, description, type, stock, ratings } = req.body;

    const escapeName = escape(name);
    const escapePrice = escape(price);
    const escapeDescription = escape(description);
    const escapeStock = escape(stock);
    const escapeRating = escape(ratings);

    if (!name || !price || req.file.originalFileName)
        return res.json({ require: "name, price and other information!" });

    const typeFomat = escape(type.trim().toLowerCase());
    const id = generateRandomString(10);
    const originalFileName = `${uuidv4()}${path.extname(req.file.originalname)}`;

    try {
        if (!req.file) return res.status(400).send("No file uploaded.");

        const blob = bucket.file(originalFileName);
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype,
            },
        });

        blobStream.on("error", (err) => {
            console.error(err);
            res.status(500).send({ error: "Something went wrong uploading the image!" });
        });

        blobStream.on("finish", async () => {
            try {
                const [url] = await blob.getSignedUrl({
                    action: "read",
                    expires: Date.now() + 60 * 60 * 1000,
                });

                const item = new Product({
                    id,
                    name: escapeName,
                    price: escapePrice,
                    description: escapeDescription,
                    type: typeFomat,
                    imageUrl: originalFileName,
                    stock: escapeStock,
                    ratings: escapeRating,
                });

                await item.save();

                if (!item) return res.send({ error: "something when wrong!" });

                const itemForFrontEnd = { ...item, imageUrl: url };
                res.status(201).json(itemForFrontEnd);
            } catch (error) {
                res.status(500).send({ error: "Failed to save product or generate image URL." });
            }
        });

        blobStream.end(req.file.buffer);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!", details: error.message });
    }
};

module.exports = postProduct;
