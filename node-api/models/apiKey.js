//
const mongoose = require("mongoose");
const apiKeySchema = new mongoose.Schema({
  key: String,
  createdAt: Date,
  lastUsed: Date,
});

const ApiKey = mongoose.model("ApiKey", apiKeySchema);
module.exports = ApiKey;
