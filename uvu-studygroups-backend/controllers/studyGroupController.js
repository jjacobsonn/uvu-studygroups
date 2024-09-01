const StudyGroup = require('../models/StudyGroup');

const studyGroupController = {};

// Create a new study group
studyGroupController.create = async (req, res) => {
    try {
        const groupData = {
            group_name: req.body.group_name,
            course_name: req.body.course_name,
            description: req.body.description,
            meeting_day: req.body.meeting_day,
            meeting_time: req.body.meeting_time,
            location: req.body.location,
            max_size: req.body.max_size || 10,  // Default max_size to 10 if not provided
            allow_join: req.body.allow_join || false
        };

        if (!groupData.group_name) {
            return res.status(400).json({ message: 'Group name is required' });
        }

        const result = await StudyGroup.create(groupData);
        res.status(201).json({ message: 'Study group created successfully', groupId: result.insertId });
    } catch (err) {
        console.error('Error creating study group:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch study groups with pagination
studyGroupController.getPaginated = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 8;
        const offset = (page - 1) * pageSize;

        const total = await StudyGroup.count();
        const groups = await StudyGroup.findAllPaginated(offset, pageSize);

        res.status(200).json({
            total,
            groups,
        });
    } catch (err) {
        console.error('Error fetching study groups:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch study group by ID
studyGroupController.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const group = await StudyGroup.findById(id);
        if (group) {
            res.status(200).json(group);
        } else {
            res.status(404).json({ message: 'Study group not found' });
        }
    } catch (err) {
        console.error('Error fetching study group by ID:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = studyGroupController;