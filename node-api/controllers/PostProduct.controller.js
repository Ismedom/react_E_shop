const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { bucket } = require("../utils/firebaseConfig");
const generateRandomString = require("../utils/generateId");

const postProduct = async (req, res) => {
  const { name, price, description, type, stock, ratings } = req.body;
  const id = generateRandomString(15);
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const blob = bucket.file(uuidv4() + path.extname(req.file.originalname));
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
          expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        });

        const item = new Product({
          id,
          name,
          price,
          description,
          type,
          imageUrl: url,
          stock,
          ratings,
        });

        const savedItem = await item.save();
        res.status(201).json(savedItem);
      } catch (error) {
        console.error("Error saving product or generating signed URL:", error);
        res.status(500).send({ error: "Failed to save product or generate image URL." });
      }
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong!", details: error.message });
  }
};

module.exports = postProduct;
