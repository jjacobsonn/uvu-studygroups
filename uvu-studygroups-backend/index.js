const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const studyGroupRoutes = require('./routes/studyGroupRoutes'); // Import the study group routes
const db = require('./config/db'); // Use the connection from db.js

// Load environment variables
dotenv.config();

// Debugging: Log the environment variables to ensure they're loaded correctly
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Initialize express app
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());

// Configure CORS to allow requests from the frontend
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/study-groups', studyGroupRoutes); // Add the study groups routes

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});