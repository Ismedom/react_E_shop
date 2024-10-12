const DeleteProduct = require("../../../controllers/product/delete/DeleteProduct.controller");
const authenticateApiKey = require("../../../middleware/authenticateApiKey");

const Router = require("express").Router();

Router.delete("/delete/:id", authenticateApiKey, DeleteProduct);

module.exports = Router;
