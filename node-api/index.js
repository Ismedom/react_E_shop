const express = require("express");
const app = express();
require("dotenv").config();
//
app.listen(process.env.PORT, () => {
  // listen
  console.log("http://localhost:" + PORT);
});
