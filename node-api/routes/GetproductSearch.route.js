//
const express = require("express");
const authenticateApiKey = require("../middleware/authenticateApiKey");
const { productSearchByDes } = require("../controllers/product.search");
const Router = express.Router();
//
Router.get("/", authenticateApiKey, productSearchByDes);
