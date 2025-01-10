const express = require('express');  
const bodyparser = require('body-parser');  
const routes = require('./routes');  // Import the routes

// Begin Application config
const app = express();
app.use(bodyparser.json());  // Middleware to parse incoming JSON requests

// Mount routes under /api/v1/
app.use('/api/v1/', routes);

module.exports = app;  // Export the app for use in AWS Lambda
