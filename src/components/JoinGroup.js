import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import '../styles/JoinGroup.css';
import customIcon from '../icons/dg-person-7.png';

const JoinGroup = ({ group, setCurrentPage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // Assume user is logged in
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
    const token = localStorage.getItem('token');
    if (!token || token === 'null') {
      setIsLoggedIn(false);  // If no token, user is not logged in
    }
  }, []);

  const handleLoginRedirect = () => {
    setCurrentPage('login');  // Redirect to login page
    window.scrollTo(0, 0); // Scroll to top after redirecting
  };

  const handleJoinGroupClick = () => {
    if (isLoggedIn) {
      // Redirect to success page if the user is logged in
      setCurrentPage('joinGroupSuccess');
      window.scrollTo(0, 0); // Scroll to top when navigating to the success page
    }
  };

  if (!group) {
    return <p>No group data available.</p>; // Handle missing group data
  }

  return (
    <div className="join-group-page">
      <Banner />
      <div className="join-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">JOIN A GROUP</h2>
        <div className="join-group-line-with-icon flex items-center justify-center">
          <div className="join-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="join-group-icon" />
          <div className="join-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
        <p className="text-green-800 lato-regular mb-8" style={{ fontSize: '1.25rem' }}>
          Join a group and collaborate with other students in study sessions.
        </p>
      </div>
      
      {isLoggedIn ? (
        <div className="join-group-form-container bg-green-800 rounded-lg p-8 mx-auto max-w-4xl">
          <h3 className="text-white text-3xl rajdhani-bold text-center mb-4">JOIN A STUDY GROUP</h3>
          <p className="text-white text-center mb-6" style={{ fontSize: '1.2rem' }}>
            Connect with peers and enhance your learning
          </p>
          <div className="line-divider"></div>
          {message && <p className="text-center text-white mb-4">{message}</p>}
          <form className="join-group-form grid gap-4">
            <div className="form-group">
              <label className="text-white">Group Name</label>
              <input
                type="text"
                value={group.group_name || 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
              />
            </div>
            <div className="form-group">
              <label className="text-white">Course Name</label>
              <input
                type="text"
                value={group.course_name || 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
              />
            </div>
            <div className="form-group col-span-2">
              <label className="text-white">Description of Group Focus and Goals</label>
              <textarea
                value={group.description || 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label className="text-white">Meeting Days</label>
              <input
                type="text"
                value={group.meeting_day || 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
              />
            </div>
            <div className="form-group">
              <label className="text-white">Meeting Time</label>
              <input
                type="text"
                value={group.meeting_time || 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
              />
            </div>
            <div className="form-group col-span-2">
              <label className="text-white">Group Meeting Location</label>
              <input
                type="text"
                value={group.location || 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
              />
            </div>
            <div className="form-group col-span-2">
              <label className="text-white">Maximum Group</label>
              <input
                type="text"
                value={group.max_size !== null ? group.max_size : 'N/A'}
                readOnly
                className="form-control bg-white text-green-800"
              />
            </div>
            <div className="text-center col-span-2" style={{ marginTop: '1.5rem' }}>
              <button className="btn-green" type="button" onClick={handleJoinGroupClick}>
                JOIN GROUP
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Message when the user is not logged in
        <div className="not-logged-in-message-container text-center bg-green-800 rounded-lg p-8 mx-auto max-w-4xl">
          <h3 className="text-white text-3xl rajdhani-bold mb-4">Login Required</h3>
          <p className="text-white mb-6" style={{ fontSize: '1.2rem' }}>
            You need to log in to join a study group. Please click the button below to log in.
          </p>
          <button className="btn-green w-full mx-auto mt-6 mb-4" onClick={handleLoginRedirect}>
            Go to Login
          </button>
        </div>
      )}

      <StudentResources />
    </div>
  );
};

export default JoinGroup;