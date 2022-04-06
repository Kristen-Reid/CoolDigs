const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Spot, Image } = require('../../db/models');



router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: [
            {
                model: Image
            }
        ]
    });
    return res.json(spots);
}));


router.post('/new', requireAuth, asyncHandler(async (req, res) => {
    const spot = await Spot.create(req.body);
    const image = await Image.create({
        image: req.body.image,
        spotId: spot.id
    });
    return res.json(spot);
}));


router.put('/:id/edit', requireAuth, asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10);
    const spot = await Spot.findByPk(spotId, {
        include: [
            {
                model: Image
            }
        ]
    });

    const {
        title,
        city,
        state,
        locationName,
        price,
        description,
        image
    } = req.body;

    if (spot) {
                spot.title = title,
                spot.city = city,
                spot.state = state,
                spot.locationName = locationName,
                spot.price = price,
                spot.description = description,
                spot.image = image

                await spot.save();
                return res.json(spot);
    }

}));


router.delete('/:id/delete', requireAuth, asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10);
    const spot = await Spot.findByPk(spotId);

    await spot.destroy({
        options: {
            cascade: true
        }
    });

    return res.json(spot);
}));

// router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
//     const spotId = parseInt(req.params.id, 10);
//     const spot = await Spot.findByPk(spotId, {
//         include: [
//             {
//                 model: Image
//             }
//         ]
//     });

//     return res.json(spot);
// }));

module.exports = router;
