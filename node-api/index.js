//

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connect = require("./utils/connect_DB");
const apiKeysRouter = require("./routes/generateApiKey.route");
const GetproductDetailsRouter = require("./routes/Getproduct_detail.route");
const GetProductRouter = require("./routes/GetProducts.route");
const PostProductRouter = require("./routes/PostProduct.route");
const PostRatingRouter = require("./routes/PostRating.route");
const GreetingRoute = require("./routes/Greeting.route");
const SearchingRouter = require("./routes/GetproductSearch.route");
const DeleteProductRouter = require("./routes/DeleteProduct.route");
require("./utils/firebaseConfig");

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect();
app.use(GreetingRoute);
app.use(apiKeysRouter);
app.use(GetproductDetailsRouter);
app.use(GetProductRouter);
app.use(PostProductRouter);
app.use(PostRatingRouter);
app.use(SearchingRouter);
app.use(DeleteProductRouter);

app.listen(process.env.PORT, () => {
    console.log("http://localhost:" + process.env.PORT);
});
