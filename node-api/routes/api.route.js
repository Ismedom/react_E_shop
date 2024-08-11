const express = require("express");
const router = express.Router();
const generateApiKey = require("../utils/generateApiKey");
const { authenticateApiKey, apiKeys } = require("../middleware/auth");

router.post("/generate-api-key", (req, res) => {
  const newApiKey = generateApiKey();
  apiKeys.add(newApiKey);
  res.json({ apiKey: newApiKey });
});

router.get("/protected-route", authenticateApiKey, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

module.exports = router;
