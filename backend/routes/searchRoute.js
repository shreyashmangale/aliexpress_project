const express = require('express');
const { getSearchedProducts } = require('../controllers/seachedController');


const router = express.Router()

router.get('/:searchedName', getSearchedProducts);


module.exports = router