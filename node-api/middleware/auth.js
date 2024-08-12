// const apiKeys = new Set();

// function authenticateApiKey(req, res, next) {
//   const apiKey = req.get("X-API-Key");
//   if (!apiKeys.has(apiKey)) {
//     return res.status(401).json({ error: "Invalid API key" });
//   }
//   next();
// }

// module.exports = { authenticateApiKey, apiKeys };
