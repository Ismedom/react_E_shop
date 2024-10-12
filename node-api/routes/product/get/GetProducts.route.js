//
const express = require("express");
const Router = express.Router();
const GetProducts = require("../../../controllers/product/get/Getproduct.controller");
const authenticateApiKey = require("../../../middleware/authenticateApiKey");

Router.get("/product", authenticateApiKey, GetProducts);

module.exports = Router;
