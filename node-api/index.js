//

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connect = require("./utils/connect_DB");
const apiKeysRouter = require("./routes/apiKey/generateApiKey.route");
const GetproductDetailsRouter = require("./routes/product/get/Getproduct_detail.route");
const GetProductRouter = require("./routes/product/get/GetProducts.route");
const PostProductRouter = require("./routes/product/post/PostProduct.route");
const PostRatingRouter = require("./routes/product/post/PostRating.route");
const SearchingRouter = require("./routes/product/get/GetproductSearch.route");
const DeleteProductRouter = require("./routes/product/delete/DeleteProduct.route");
require("./utils/firebaseConfig");

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin", "apikey"],
    })
);

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect();
app.get("/", (req, res) => {
    res.render("index", { title: "Home Page", message: "Welcome to my website!" });
});

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
