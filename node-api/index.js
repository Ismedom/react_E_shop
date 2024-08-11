const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./utils/connect_DB");
const apiKeysRouter = require("./routes/generateApiKey.route");

//
connect();
app.use(apiKeysRouter);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
