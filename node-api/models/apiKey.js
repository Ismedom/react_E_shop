//
const mongoose = require("mongoose");
const apiKeySchema = new mongoose.Schema({
    key: {
        required: true,
        type: String,
    },
    createdAt: Date,
    lastUsed: Date,
});

const ApiKey = mongoose.model("ApiKey", apiKeySchema);
module.exports = ApiKey;
