//
const express = require("express");
const authenticateApiKey = require("../../../middleware/authenticateApiKey");
const {
    productSearchByDes,
    productSearchByType,
    productSearchByPrice,
    productSearchById,
    productSearchByName,
    productSearchByEQPrice,
} = require("../../../controllers/product/get/product.search");
const Router = express.Router();

Router.get("/search/description", authenticateApiKey, productSearchByDes);
Router.get("/search/type", authenticateApiKey, productSearchByType);
Router.get("/search/price", authenticateApiKey, productSearchByPrice);
Router.get("/search/id", authenticateApiKey, productSearchById);
Router.get("/search/name", authenticateApiKey, productSearchByName);
Router.get("/search/eqPrice", authenticateApiKey, productSearchByEQPrice);

module.exports = Router;
