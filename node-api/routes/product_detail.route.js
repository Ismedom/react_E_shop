//

const express = require("express");
const Router = express.Router();
const productDetails = require("../controllers/product_detail.controller");
const authenticateApiKey = require("../middleware/authenticateApiKey");

Router.get("/gaming", authenticateApiKey, productDetails);

module.exports = Router;
