import React, { useEffect } from 'react';
import Banner from './Banner';
import img3 from '../images/img-3.jpg';
import SearchForStudyGroups from './SearchForStudyGroups';
import JoinCourses from './JoinCourses';
import StudentResources from './StudentResources';

const JoinStudyGroup = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>
            JOIN A <span style={{ fontWeight: 'bold' }}>STUDY GROUP</span>
          </h2>
          <p className="lato-regular mb-6">
            Welcome to the "Join Study Groups" section of our platform, where collaboration meets convenience. Here, you can explore and join study groups tailored to your courses and interests. Whether you're looking to deepen your understanding of a specific subject, connect with peers who share your academic goals, or simply need a support system to stay motivated, our study groups provide the perfect environment for learning together. Joining a group is simple—browse the available groups, find one that fits your needs, and start participating in discussions, sharing resources, and preparing for exams alongside like-minded students. Elevate your academic experience by joining a study group today, and discover the power of collective learning.
          </p>
          <button 
            className="outline-button"
            onClick={() => setCurrentPage('home')}
          >
            Learn More About Us
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={img3} alt="Study Group" className="home-abt-image" />
        </div>
      </div>
      <SearchForStudyGroups />
      <JoinCourses setCurrentPage={setCurrentPage} />
      <StudentResources />
    </div>
  );
};

export default JoinStudyGroup;