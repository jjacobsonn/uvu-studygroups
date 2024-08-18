const db = require('../config/db');

const User = {};

// Create a new user in the database
User.create = async (userData) => {
    const query = 'INSERT INTO users (first_name, last_name, student_id, email, password) VALUES (?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(query, [userData.firstName, userData.lastName, userData.studentId, userData.email, userData.password], (err, result) => {
            if (err) {
                console.error('Error creating user:', err);
                reject(err);
            } else {
                console.log('User created in the database:', result);
                resolve(result);
            }
        });
    });
};

// Find a user by their email address
User.findByEmail = (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [email], (err, result) => {
            if (err) {
                console.error('Error finding user by email:', err);
                reject(err);
            } else {
                if (result.length > 0) {
                    console.log('User found in the database:', result[0]);
                    resolve(result[0]); // Return the first result (assuming email is unique)
                } else {
                    console.log('No user found with email:', email);
                    resolve(null);
                }
            }
        });
    });
};

module.exports = User; 