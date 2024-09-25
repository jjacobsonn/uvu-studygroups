import React, { useEffect } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import customIcon from '../icons/dg-person-7.png'; 
import successImage from '../images/img-8.jpg';  // Add an image representing a successful join

const JoinGroupSuccessPage = ({ setCurrentPage }) => {
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
            YOU'VE <span style={{ fontWeight: 'bold' }}>JOINED A STUDY GROUP</span>
          </h2>
          <p className="lato-regular mb-6">
            Congratulations on joining a study group! You've taken the first step toward a more engaging and collaborative academic experience. Now, you can connect with your peers, attend study sessions, tackle group projects, and share insights to help each other succeed. Get ready to improve your learning, stay motivated, and achieve your goals together. This is your opportunity to not only strengthen your academic skills but also build meaningful connections with fellow students.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={successImage} alt="Success" className="home-abt-image" />
        </div>
      </div>
      <div className="create-study-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">GET STARTED NOW</h2>
        <div className="create-study-group-line-with-icon flex items-center justify-center">
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="create-study-group-icon" />
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
      </div>

      <div className="welcome-page-container py-8">
        <div className="welcome-card bg-green-800 rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">You're all set!</h2>
          <p className="text-center text-white mb-6 text-lg">
            You can now access your group’s discussions and study materials. Explore more groups or go back to the homepage.
          </p>
          <button
            className="btn-green w-full mx-auto mt-6 mb-4"
            onClick={() => setCurrentPage('view-study-groups')}
          >
            View Study Groups
          </button>
          <button
            className="btn-green w-full mx-auto mt-4"
            onClick={() => setCurrentPage('home')}
          >
            Return to Home
          </button>
        </div>
      </div>
      <StudentResources />
    </div>
  );
};

export default JoinGroupSuccessPage;
