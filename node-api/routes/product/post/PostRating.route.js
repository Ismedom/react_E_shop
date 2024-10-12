//
const express = require("express");
const authenticateApiKey = require("../../../middleware/authenticateApiKey");
const PostRating = require("../../../controllers/product/post/PostRating");
const Router = express.Router();

Router.post("/rating", authenticateApiKey, PostRating);

module.exports = Router;
