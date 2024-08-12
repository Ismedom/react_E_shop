const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./utils/connect_DB");
const apiKeysRouter = require("./routes/generateApiKey.route");
const productDetailsRouter = require("./routes/product_detail.route");

//
connect();
app.use(apiKeysRouter);
app.use(productDetailsRouter);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
