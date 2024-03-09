// This is the main entry point for the project

// Import necessary modules and libraries
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Use middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Define routes and their handlers
app.get('/', (req, res) => {
  res.send('Welcome! Thank you for your interest and support in this project! We hope it brings value to you and becomes a reliable companion in your work life.');
});

// Start the server and listen for incoming requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
