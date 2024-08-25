const express = require("express");
const authenticateApiKey = require("../middleware/authenticateApiKey");
const postProduct = require("../controllers/PostProduct.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const Router = express.Router();

Router.post("/post-product", authenticateApiKey, upload.single("image"), postProduct);

module.exports = Router;
