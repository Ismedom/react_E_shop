//
const ApiKey = require("../models/apiKey");

async function authenticateApiKey(req, res, next) {
    //
    const apiKey = req.get("apiKey");
    if (!apiKey) return res.json({ message: "required apikey first!" });

    const validKey = await ApiKey.findOne({ key: apiKey });

    if (!validKey) return res.status(401).json({ error: "Invalid API key" });

    validKey.lastUsed = new Date();
    await validKey.save();
    next();
}

module.exports = authenticateApiKey;
