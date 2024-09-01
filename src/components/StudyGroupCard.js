import React from 'react';
import '../styles/StudyGroupCard.css';

const StudyGroupCard = ({ group, setCurrentPage, setSelectedGroup }) => {

  console.log('StudyGroupCard.js - setSelectedGroup:', setSelectedGroup);

  const handleLearnMoreClick = () => {
    if (typeof setSelectedGroup === 'function') {
      console.log('StudyGroupCard.js - Handling Learn More click');
      setSelectedGroup(group);
      setCurrentPage('join-group');
    } else {
      console.error('setSelectedGroup is not a function:', setSelectedGroup);
    }
  };

  return (
    <div className="study-group-card-container">
      <div className="study-group-card-content flex flex-col justify-end h-full">
        <div className="study-group-card-title p-4 bg-white text-green-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold rajdhani-bold">
            {group.course_name ? `${group.course_name}: ${group.group_name}` : 'No Group Data Available'}
          </h2>
          <button 
            className="learn-more-button mt-2 bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleLearnMoreClick}
          >
            Learn More
            <svg className="ml-2 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyGroupCard;