//
const express = require("express");
const Router = express.Router();
const GetproductDetails = require("../controllers/Getproduct_detail.controller");
const authenticateApiKey = require("../middleware/authenticateApiKey");

Router.get("/product-details", authenticateApiKey, GetproductDetails);

module.exports = Router;
