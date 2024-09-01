const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      console.error('Authentication error: Token has expired');
      return res.status(401).json({ message: 'Authentication failed: Token has expired' });
    } else {
      console.error('Authentication error:', err);
      return res.status(401).json({ message: 'Authentication failed: Invalid token' });
    }
  }
};

module.exports = authenticate;