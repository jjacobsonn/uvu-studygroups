const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authenticate');

// Register Route
router.post('/signup', authController.register);

// Login Route
router.post('/login', authController.login);

// Get User Details Route (Protected)
router.get('/user', authenticate, authController.getUserDetails);

module.exports = router;