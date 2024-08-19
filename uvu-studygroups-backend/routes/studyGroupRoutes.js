const express = require('express');
const router = express.Router();
const studyGroupController = require('../controllers/studyGroupController');
const authenticate = require('../middleware/authenticate'); // Ensure user is authenticated

// Create a new study group (Authenticated route)
router.post('/', authenticate, studyGroupController.create);

// Get study groups with pagination
router.get('/', studyGroupController.getPaginated);

// Get a study group by ID
router.get('/:id', studyGroupController.getById);

module.exports = router;
