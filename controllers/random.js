
// Auto-generated by AutoPilot on 05-08-2023 at 19:23:39


const express = require('express');
const router = express.Router();

//Generate a random number between 0 and 1
router.get('/veryRandom', (req, res) => {
    const randomNumber = Math.random();
    //Send the random number as response
    res.status(200).send({ randomNumber });
});

module.exports = router;