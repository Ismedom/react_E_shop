const Router = require("express").Router();

const paths = ["/", "/greeting"];
paths.forEach((path) => {
    Router.get(path, (req, res) => {
        res.json({ greeting: "Welcome to my api" });
    });
});

module.exports = Router;
