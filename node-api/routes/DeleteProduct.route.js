const DeleteProduct = require("../controllers/DeleteProduct.controller");
const authenticateApiKey = require("../middleware/authenticateApiKey");

const Router = require("express").Router();

Router.delete("/delete/:id", authenticateApiKey, DeleteProduct);

module.exports = Router;
