const express = require('express');
const router = express.Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);


router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
