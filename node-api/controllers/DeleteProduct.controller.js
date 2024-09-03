const product = require("../models/product");

const DeleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await product.findOneAndDelete({ id });

        if (!result) return res.status(404).json({ deleteSuccess: false, message: "Product not found" });

        res.json({ deleteSuccess: true });
    } catch (err) {
        res.status(500).json({ deleteSuccess: false, error: `error${err.message}` });
    }
};

module.exports = DeleteProduct;
