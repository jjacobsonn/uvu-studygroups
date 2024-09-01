const db = require('../config/db');

const StudyGroup = {};

// Create a new study group in the database
StudyGroup.create = async (groupData) => {
    const query = `
        INSERT INTO study_groups (group_name, course_name, description, meeting_day, meeting_time, location, max_size, allow_join)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    return new Promise((resolve, reject) => {
        db.query(query, [
            groupData.groupName,
            groupData.courseName,
            groupData.description,
            groupData.meetingDay,
            groupData.meetingTime,
            groupData.location,
            groupData.groupSize,   // This is where max_size is set
            groupData.allowJoin
        ], (err, result) => {
            if (err) {
                console.error('Error creating study group:', err);
                reject(err);
            } else {
                console.log('Study group created:', result);
                resolve(result);
            }
        });
    });
};

// Fetch study groups with pagination
StudyGroup.findAllPaginated = (offset, limit) => {
    const query = 'SELECT * FROM study_groups LIMIT ?, ?';
    return new Promise((resolve, reject) => {
        db.query(query, [offset, limit], (err, results) => {
            if (err) {
                console.error('Error fetching study groups:', err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Count total number of study groups
StudyGroup.count = () => {
    const query = 'SELECT COUNT(*) as total FROM study_groups';
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error counting study groups:', err);
                reject(err);
            } else {
                resolve(results[0].total);
            }
        });
    });
};

// Find study group by ID
StudyGroup.findById = (id) => {
    const query = 'SELECT * FROM study_groups WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [id], (err, result) => {
            if (err) {
                console.error('Error finding study group by ID:', err);
                reject(err);
            } else {
                resolve(result[0]); // Assuming id is unique, return the first result
            }
        });
    });
};

module.exports = StudyGroup;