const express = require('express')
const cors = require('cors');
const { client } = require('./dbConnection');
const app = express();
const dotenv = require('dotenv').config();
const productRoutes = require('./routes/productRoutes')
const newArrivalRoutes = require('./routes/newArrivalRoutes')
const productDetailsRoute = require('./routes/productDetailsRoute')
const searchRoute = require('./routes/searchRoute')
const visitedRoute = require('./routes/visitedRoute')

const SwaggerUi = require('swagger-ui-express')
const SwaggerDocument = require('./swagger-output.json');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json("Aliexpress App Backend");
})

app.use('/products', productRoutes)
app.use('/new_arrivals', newArrivalRoutes)
app.use('/details', productDetailsRoute)
app.use('/search', searchRoute)
app.use('/visitedproducts', visitedRoute)


// Swagger Documentation Route
app.use('/api-docs-aliexpress-project', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocument));


module.exports = app;