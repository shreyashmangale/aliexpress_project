const express = require('express');
const { getNewArrivals } = require('../controllers/newArrivalController');


const router = express.Router()

router.get('/', getNewArrivals);


module.exports = router