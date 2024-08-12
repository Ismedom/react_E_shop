//
const mongoose = require("mongoose");
require("dotenv");

function connect() {
  mongoose
    .connect(process.env.MONGODBURI)
    .then(() => console.log("succes connent"))
    .catch((e) => {
      console.error(e);
    });
}
module.exports = connect;
