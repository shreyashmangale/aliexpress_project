const express = require('express');
const { addToVisitedProducts, getVisitedProducts } = require('../controllers/visitedController');


const router = express.Router()

router.get('/:userId', getVisitedProducts)
router.post('/', addToVisitedProducts);


module.exports = router