const mongoose = require("mongoose");

const newApiKey = new ApiKey({
  key: generateApiKey(),
  createdAt: new Date(),
  lastUsed: null,
});
await newApiKey.save();

//
const validKey = await ApiKey.findOne({ key: providedApiKey });
if (validKey) {
  //
}
