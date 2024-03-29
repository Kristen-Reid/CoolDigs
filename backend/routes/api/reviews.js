const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Review, Spot, User } = require('../../db/models');


router.post('/new', requireAuth, asyncHandler(async (req, res) => {
    const review = await Review.create(req.body);

    res.json(review);
}));



router.put('/:id(\\d+)/edit', requireAuth, asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId, {
        include: [
            {
                model: Spot
            },
            {
                model: User
            }
        ]
    });

    const { title, content } = req.body;

    if (review) {

        review.title = title;
        review.content = content
    };

    await review.save();
    return res.json(review);

}));

router.delete('/:id(\\d+)/delete', requireAuth, asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId);
    console.log(review)

    await review.destroy({
        options: {
            cascade: true
        }
    });

    return res.json(review);
}));


module.exports = router;
