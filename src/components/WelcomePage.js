import React, { useEffect } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import customIcon from '../icons/dg-person-7.png'; 
import studyGroupImage from '../images/img-7.jpg'; 

const WelcomePage = ({ setCurrentPage }) => {
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
            WELCOME TO <span style={{ fontWeight: 'bold' }}>UVU STUDY GROUPS</span>
          </h2>
          <p className="lato-regular mb-6">
            Welcome to UVU Study Groups, where your academic journey becomes a collaborative and enriching experience. Our platform is designed to connect you with fellow students who share your courses and academic goals, enabling you to form or join study groups that fit your schedule and learning style. Whether you're preparing for exams, tackling challenging assignments, or simply looking to discuss course material in a supportive environment, UVU Study Groups provides the tools and resources to help you succeed.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={studyGroupImage} alt="Study Group" className="home-abt-image" />
        </div>
      </div>
      <div className="create-study-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">COLLABORATE AND SUCCEED TOGETHER</h2>
        <div className="create-study-group-line-with-icon flex items-center justify-center">
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="create-study-group-icon" />
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
      </div>
      {/* End of Header Section */}

      <div className="welcome-page-container py-8">
        <div className="welcome-card bg-green-800 rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">We're glad you're here!</h2>
          <p className="text-center text-white mb-6 text-lg">
            <span className="text-bold">Create a study group</span> or <span className="text-bold">join a study group</span> to start collaborating with other students.
          </p>
          <button
            className="btn-green w-full mx-auto mt-6 mb-4"
            onClick={() => setCurrentPage('create-study-group')}
          >
            Create a Study Group
          </button>
          <button
            className="btn-green w-full mx-auto mt-4"
            onClick={() => setCurrentPage('join-study-group')}
          >
            Join a Study Group
          </button>
        </div>
      </div>
      <StudentResources />
    </div>
  );
};

export default WelcomePage;