const crypto = require("crypto");

function generateApiKey_() {
  return crypto
    .createHash("sha256")
    .update(process.env.API_SECRET + Date.now())
    .digest("hex");
}

module.exports = generateApiKey_;
