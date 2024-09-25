import React, { useEffect } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import customIcon from '../icons/dg-person-7.png'; 
import studyGroupImage from '../images/img-7.jpg'; 

const GroupSuccessPage = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App app-container">
      <Banner />

      {/* Header, Image, Lines, and Icon Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>
            GROUP CREATED <span style={{ fontWeight: 'bold' }}>SUCCESSFULLY</span>
          </h2>
          <p className="lato-regular mb-6">
            Congratulations! Your study group has been created successfully. You can now invite other students to join and start collaborating on your academic journey. Your group will be listed in the available study groups, where students can join based on the course and schedule preferences.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={studyGroupImage} alt="Study Group" className="home-abt-image" />
        </div>
      </div>
      <div className="create-study-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">CONNECT AND COLLABORATE</h2>
        <div className="create-study-group-line-with-icon flex items-center justify-center">
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="create-study-group-icon" />
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
      </div>
      {/* End of Header Section */}

      <div className="welcome-page-container py-8">
        <div className="welcome-card bg-green-800 rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">Your Group is Ready!</h2>
          <button
            className="btn-green w-full mx-auto mt-6 mb-4"
            onClick={() => setCurrentPage('home')}
          >
            View Study Groups
          </button>
          <button
            className="btn-green w-full mx-auto mt-4"
            onClick={() => setCurrentPage('create-study-group')}
          >
            Create Another Group
          </button>
        </div>
      </div>
      <StudentResources />
    </div>
  );
};

export default GroupSuccessPage;