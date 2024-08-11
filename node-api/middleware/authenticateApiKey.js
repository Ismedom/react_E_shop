//
const ApiKey = require("../models/apiKey");

async function authenticateApiKey(req, res, next) {
  const apiKey = req.get("X-API-Key");
  const validKey = await ApiKey.findOne({ key: apiKey });
  if (!validKey) {
    return res.status(401).json({ error: "Invalid API key" });
  }
  validKey.lastUsed = new Date();
  await validKey.save();
  next();
}

module.exports = authenticateApiKey;
