const mongoose = require("mongoose");
require("dotenv");

function connect() {
  mongoose
    .connect(process.env.MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("succes connent"))
    .catch((e) => {
      console.error(e);
    });
}
module.exports = connect;
