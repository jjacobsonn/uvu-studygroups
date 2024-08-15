const User = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const authController = {};

// Register method
authController.register = async (req, res) => {
    try {
        const { firstName, lastName, studentId, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password with Argon2
        const hashedPassword = await argon2.hash(password);

        // Create new user
        const newUser = {
            firstName,
            lastName,
            studentId,
            email,
            password: hashedPassword
        };

        await User.create(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            if (err.sqlMessage.includes('student_id')) {
                return res.status(400).json({ message: 'Student ID already exists. Please use a different student ID.' });
            } else if (err.sqlMessage.includes('email')) {
                return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
            }
        }
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login method
authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare password with Argon2
        const isMatch = await argon2.verify(user.password, password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, firstName: user.firstName }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user details method
authController.getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id; // Assumes the user ID is available in req.user from JWT authentication middleware
        const user = await User.findById(userId); // Fetch user from DB by ID

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            firstName: user.first_name, // Adjust this according to your DB schema
            lastName: user.last_name,   // Include any other user details as needed
            email: user.email,
            // Add any other user info you need
        });
    } catch (err) {
        console.error('Error fetching user details:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = authController;