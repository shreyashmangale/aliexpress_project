const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Aliexpress Project',
        description: 'Alma x project'
    },
    host: 'https://aliexpress-project-backend.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ['./routes/newArrivalRoutes.js', './routes/productRoutes.js', './routes/productDetailsRoute.js', './routes/searchRoute.js', './routes/visitedRoute.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);