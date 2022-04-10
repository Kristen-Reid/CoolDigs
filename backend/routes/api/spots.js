const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Spot, Image, Review, User } = require('../../db/models');



router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: [
            {
                model: Image
            },
            {
                model: User
            },
            {
                model: Review,
                include: [
                    User
                ]
            }
        ]
    });
    return res.json(spots);
}));


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10)
    const spot = await Spot.findByPk(spotId, {
        include: [
            {
                model: Image
            },
            {
                model: User
            },
            {
                model: Review,
                include: [
                    User
                ]
            }
        ]
    })

    return res.json(spot);

}));


router.post('/new', requireAuth, asyncHandler(async (req, res) => {
    const spot = await Spot.create(req.body);
    const image = await Image.create({
        image: req.body.image,
        spotId: spot.id
    });

    const oneSpot = await Spot.findByPk(spot.id, {
        include: [
            {
                model: Image
            }
        ]
    })

    return res.json(oneSpot);
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

    const { title, city, state, locationName, price, description, image } = req.body;

    if (spot) {

        spot.title = title,
        spot.city = city,
        spot.state = state,
        spot.locationName = locationName,
        spot.price = price,
        spot.description = description,
        spot.image = image
    }

    await spot.save();

    
    const imageDBLog = await Image.findOne({
        where: {
            spotId
        }
    });

     if (imageDBLog) {
                imageDBLog.image = image
    }

    await imageDBLog.save();

    const oneSpot = await Spot.findByPk(spot.id, {
        include: [
            {
                model: Image
            }
        ]
    })

    return res.json(oneSpot);


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

module.exports = router;
