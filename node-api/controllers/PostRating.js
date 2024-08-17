//

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
    res.json(ratingItem);
  } catch (e) {
    res.status(500).json({ err: e.message });
  }
};

module.exports = PostRating;
