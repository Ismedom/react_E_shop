//

const express = require("express");
const authenticateApiKey = require("../middleware/authenticateApiKey");
const postProduct = require("../controllers/PostProduct.controller");
const Router = express.Router();
Router.post("/post-product", authenticateApiKey, postProduct);

module.exports = Router;
