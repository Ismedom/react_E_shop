const product = require("../models/product");
const ratings = require("../models/rating");

const PostRating = async (req, res) => {
    const { id, userId, rating } = req.body;
    const ratingItem = new ratings({
        id,
        userId,
        rating,
    });

    try {
        await ratingItem.save();

        const ratingArr = await ratings.find({ id });
        const productInfor = await product.findOne({ id });

        if (!productInfor) return res.status(404).json({ message: "Product not found" });
        if (ratingArr.length === 0) return res.json({ information: "Cannot find any data" });

        const totalStaring = ratingArr.reduce((accumulator, item) => {
            return accumulator + item.rating;
        }, 0);
        const averageStaring = totalStaring / ratingArr.length;

        await product.findOneAndUpdate({ id }, { ratings: averageStaring }, { new: true });
        res.json(ratingItem); //end
    } catch (e) {
        res.status(500).json({ errF: "something when wrong", err: e.message });
    }
};

module.exports = PostRating;
