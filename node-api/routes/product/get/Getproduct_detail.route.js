//
const express = require("express");
const Router = express.Router();
const GetproductDetails = require("../../../controllers/product/get/Getproduct_detail.controller");
const authenticateApiKey = require("../../../middleware/authenticateApiKey");

Router.get("/product-details/:id", authenticateApiKey, GetproductDetails);

module.exports = Router;
