const express = require('express');
const { getProduct } = require('../controllers/productDetailsController');


const router = express.Router()

router.get('/:Description', getProduct);


module.exports = router