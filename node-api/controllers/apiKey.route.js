//
const ApiKey = require("../models/apiKey");
const generateApiKey_ = require("../utils/generateApiKey");

const generateApiKey = async (req, res) => {
  const newApiKey = new ApiKey({
    key: generateApiKey_(),
    createdAt: new Date(),
    lastUsed: null,
  });
  await newApiKey.save().then(() => console.log("save success"));
  res.json({ apiKey: newApiKey.key });
};

module.exports = generateApiKey;
