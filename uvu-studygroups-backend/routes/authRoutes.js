const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register Route
router.post('/signup', authController.register);

// Login Route
router.post('/login', authController.login);

module.exports = router;