// ✅ authentication.js
const authenticate = (req, res, next) => {
  // Example simple token check
  const token = req.headers['authorization'];

  if (token === 'Bearer secret-token') {
    next(); // allow the request
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;