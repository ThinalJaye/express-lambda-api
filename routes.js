const express = require('express');  
const router = express.Router();  // Initialize router

// Route for the base path '/'
router.get('/', (req, res) => {
  res.json({
    message: 'Hello from Express.js on AWS Lambda!'
  });
});

// Route for '/hello/:name'
router.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.json({ 
    message: `Hello, ${name}!` 
  });
});

// Route for '/data' with POST method
router.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Received data successfully!',
    data: data
  });
});

module.exports = router;  // Export the router
