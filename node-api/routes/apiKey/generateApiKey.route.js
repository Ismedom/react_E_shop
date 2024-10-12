//
const express = require("express");
const generateApiKey = require("../../controllers/apiKey/apiKey.route");
const Router = express.Router();

Router.post("/generate-api-key", generateApiKey);

module.exports = Router;
