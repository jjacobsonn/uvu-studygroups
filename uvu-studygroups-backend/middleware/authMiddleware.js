const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Received Token:', token); // Log the token for debugging
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Split to remove 'Bearer'
        req.user = decoded;
        next();
    } catch (ex) {
        console.error('Token Verification Error:', ex); // Log the error for debugging
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;