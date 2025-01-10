const awsServerlessExpress = require('aws-serverless-express');  
const app = require('./app');  // Import the main Express app
const server = awsServerlessExpress.createServer(app);  // Create an AWS serverless Express server

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);  // Proxy requests to AWS Lambda
};
