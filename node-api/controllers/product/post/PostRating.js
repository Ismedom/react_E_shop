const product = require("../../../models/product");
const ratings = require("../../../models/rating");
const escape = require("escape-html");

const PostRating = async (req, res) => {
    const { id, userId, rating } = req.body;
    const escapeUserId = escape(userId);
    const escapeRating = escape(rating);

    try {
        const productInfor = await product.findOne({ id });
        if (!productInfor) return res.json({ message: "product not be found1" });
        const existsUserRating = await ratings.findOneAndUpdate(
            { id, userId: escapeUserId },
            { rating: escapeRating },
            { new: true, upsert: false }
        );

        if (!existsUserRating) {
            const ratingItem = new ratings({
                id,
                userId: escapeUserId,
                rating: escapeRating,
            });
            await ratingItem.save();
        }

        const ratingArr = await ratings.find({ id });

        if (!productInfor) return res.status(404).json({ message: "Product not found" });
        if (ratingArr.length === 0) return res.json({ information: "Cannot find any data" });

        const totalStaring = ratingArr.reduce((accumulator, item) => {
            return accumulator + item.rating;
        }, 0);
        const averageStaring = totalStaring / ratingArr.length;

        await product.findOneAndUpdate({ id }, { ratings: averageStaring }, { new: true });

        res.json({ success: true, averageRating: averageStaring });
    } catch (e) {
        res.status(500).json({ errF: "something went wrong", err: e.message });
    }
};

module.exports = PostRating;
