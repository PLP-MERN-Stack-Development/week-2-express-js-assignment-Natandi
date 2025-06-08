// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const productRoutes = require('./routes/products');

// Import custom middleware
const logger = require('./middleware/logger');
const authenticate = require('./middleware/authentication');
const { errorHandler } = require('./middleware/error_handling');

// Middleware setup
app.use(bodyParser.json());
app.use(logger); // Logs each request


// Route registration
app.use('/api/products', authenticate, productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Error handling middleware (should come after all routes)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app for testing
module.exports = app;
