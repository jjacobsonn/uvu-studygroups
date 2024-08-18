import React from 'react';
import studyGroupImage from '../images/img-2.jpg';


const HomeAbtSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>LEARN ABOUT UVU STUDY GROUPS</h2>
        <p className="lato-regular mb-6">
          Welcome to the UVU Study Groups platform, your gateway to collaborative learning and academic success. Here, we believe that learning is most effective when it's shared. Our platform connects you with peers who share your courses, interests, and academic goals, creating a supportive environment where you can tackle challenging concepts together. Whether you're preparing for exams, working on group projects, or simply looking to expand your knowledge, our study groups offer the perfect space to ask questions, share insights, and grow as a student. Join a study group today and experience the power of collective learning. Together, we can achieve more!
        </p>
        <button className="outline-button">
          Learn More About Us
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={studyGroupImage} alt="Study Group" className="home-abt-image" />
      </div>
    </div>
  );
};

export default HomeAbtSection;