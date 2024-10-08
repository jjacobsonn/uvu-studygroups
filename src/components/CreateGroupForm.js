import React, { useState } from 'react';
import axios from '../anxiosInstance';

const CreateGroupForm = ({ setCurrentPage }) => {
    const [groupName, setGroupName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [meetingDay, setMeetingDay] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [location, setLocation] = useState('');
    const [maxSize, setMaxSize] = useState(10); // Default to 10 if not set
    const [allowJoin, setAllowJoin] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            // Display login required message and redirect to login page
            setMessage('Please log in to create a group.');
            if (window.confirm('You need to be logged in to create a group. Click OK to log in.')) {
                setCurrentPage('login');  // Redirect to login page
            }
            return; // Prevent further submission
        }

        try {
            const response = await axios.post('/study-groups', {
                group_name: groupName,
                course_name: courseName,
                description,
                meeting_day: meetingDay,
                meeting_time: meetingTime,
                location,
                max_size: parseInt(maxSize) || 10, // Ensure max_size is an integer
                allow_join: allowJoin
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                setCurrentPage('groupSuccess'); // Redirect to the Group Success Page
            } else {
                setMessage('Unexpected response from the server.');
            }
        } catch (error) {
            setMessage('Error creating study group. Please try again.');
        }
    };

    return (
        <div className="create-group-form-container bg-green-800 rounded-lg p-8 mx-auto max-width-4xl">
            <h3 className="text-white text-3xl rajdhani-bold text-center mb-4">ASSEMBLE YOUR GROUP</h3>
            <p className="text-white text-center mb-6" style={{ fontSize: '1.2rem' }}>
                Join forces and enhance your learning with peers today!
            </p>
            <div className="line-divider"></div>
            {message && <p className="text-center text-white mb-4">{message}</p>}
            <form className="create-group-form grid gap-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-white">Group Name</label>
                    <input
                        type="text"
                        placeholder="Enter your group name"
                        className="form-control bg-white text-green-800"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-white">Course Name</label>
                    <input
                        type="text"
                        placeholder="Enter your course name"
                        className="form-control bg-white text-green-800"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group col-span-2">
                    <label className="text-white">Describe Your Group's Focus and Goals</label>
                    <textarea
                        placeholder="Enter a short description of your group"
                        className="form-control bg-white text-green-800"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="text-white">Select Meeting Day</label>
                    <select
                        className="form-control bg-white text-green-800"
                        value={meetingDay}
                        onChange={(e) => setMeetingDay(e.target.value)}>
                        <option value="" disabled>Select Meeting Day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-white">Select Meeting Time</label>
                    <select
                        className="form-control bg-white text-green-800"
                        value={meetingTime}
                        onChange={(e) => setMeetingTime(e.target.value)}>
                        <option value="" disabled>Select Meeting Time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>
                <div className="form-group col-span-2">
                    <label className="text-white">Select Group Meeting Location</label>
                    <select
                        className="form-control bg-white text-green-800"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}>
                        <option value="" disabled>Select Group Meeting Location</option>
                        <option value="Library">Library</option>
                        <option value="Student Center">Student Center</option>
                        <option value="Science Building">Science Building</option>
                        <option value="Engineering Building">Engineering Building</option>
                        <option value="Business Building">Business Building</option>
                    </select>
                </div>
                <div className="form-group col-span-2">
                    <label className="text-white">Maximum Group Size</label>
                    <select
                        className="form-control bg-white text-green-800"
                        value={maxSize}
                        onChange={(e) => setMaxSize(e.target.value)}>
                        <option value="" disabled>Select The Maximum Number of Participants for your Group</option>
                        {[...Array(10).keys()].map(num => (
                            <option key={num} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-span-2 checkbox-container">
                    <label className="text-white checkbox-label">
                        <input
                            type="checkbox"
                            className="allow-join"
                            id="allow-join"
                            checked={allowJoin}
                            onChange={(e) => setAllowJoin(e.target.checked)}
                        />
                        <span className="checkbox-text">ALLOW ANYONE TO JOIN WITHOUT APPROVAL</span>
                    </label>
                </div>
                <div className="text-center col-span-2" style={{ marginTop: '1.5rem' }}>
                    <button className="btn-green" type="submit">CREATE GROUP</button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroupForm;