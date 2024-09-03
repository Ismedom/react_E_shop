//
const product = require("../models/product");

const productSearchByDes = async (req, res) => {
    const description = req.query.description.trim().toLowerCase();
    const itemPerPage = parseInt(req.query.itemPerPage) || 10;
    const currentPage = parseInt(req.query.currentPage) || 1;

    const productFoundByDes = await product
        .find({
            description: { $regex: description, $options: "i" },
        })
        .skip((currentPage - 1) * itemPerPage)
        .limit(itemPerPage);
    return res.json(productFoundByDes);
};

const productSearchById = async (req, res) => {
    const id = req.query.id;
    const itemPerPage = parseInt(req.query.itemPerPage) || 10;
    const currentPage = parseInt(req.query.currentPage) || 1;

    const productFoundById = await product
        .findOne({ id })
        .skip((currentPage - 1) * itemPerPage)
        .limit(itemPerPage);
    return res.json(productFoundById);
};

const productSearchByType = async (req, res) => {
    const type = req.query.type.trim().toLowerCase();
    const itemPerPage = parseInt(req.query.itemPerPage) || 10;
    const currentPage = parseInt(req.query.currentPage) || 1;

    const productFoundByType = await product
        .find({
            type,
        })
        .skip((currentPage - 1) * itemPerPage)
        .limit(itemPerPage);
    return res.json(productFoundByType);
};

const productSearchByName = async (req, res) => {
    const name = req.query.name.trim().toLowerCase();
    const itemPerPage = parseInt(req.query.itemPerPage) || 10;
    const currentPage = parseInt(req.query.currentPage) || 1;

    const productFoundByName = await product
        .find({
            name: { $regex: name, $options: "i" },
        })
        .skip((currentPage - 1) * itemPerPage)
        .limit(itemPerPage);
    return res.json(productFoundByName);
};

const productSearchByEQPrice = async (req, res) => {
    const price = parseFloat(req.query.price);
    const itemPerPage = parseInt(req.query.itemPerPage) || 10;
    const currentPage = parseInt(req.query.currentPage) || 1;

    const productFoundByEQPrice = await product
        .find({
            price,
        })
        .skip((currentPage - 1) * itemPerPage)
        .limit(itemPerPage);
    return res.json(productFoundByEQPrice);
};

const productSearchByPrice = async (req, res) => {
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);
    const itemPerPage = parseInt(req.query.itemPerPage) || 10;
    const currentPage = parseInt(req.query.currentPage) || 1;

    const productFoundbyPrice = await product
        .find({
            price: { $gt: minPrice, $lt: maxPrice },
        })
        .skip((currentPage - 1) * itemPerPage)
        .limit(itemPerPage);
    return res.json(productFoundbyPrice);
};

module.exports = {
    productSearchByDes,
    productSearchById,
    productSearchByType,
    productSearchByName,
    productSearchByEQPrice,
    productSearchByPrice,
};
