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

        console.log('User found in the database:', user);

        // Compare password with Argon2
        const isMatch = await argon2.verify(user.password, password);
        console.log('Password match:', isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = authController;