// Custom Error Classes
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

// Global Error Handler Middleware
function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    error: err.name || 'InternalServerError',
    message: err.message || 'Something went wrong',
  });
}

// Export everything
module.exports = {
  NotFoundError,
  ValidationError,
  errorHandler,
};
