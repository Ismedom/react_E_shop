//
const express = require("express");
const generateApiKey = require("../controllers/apiKey.route");
const Router = express.Router();

// const generateApiKeys = (app) => {
Router.post("/generate-api-key", generateApiKey);
// };

// module.exports = Router;
module.exports = Router;
