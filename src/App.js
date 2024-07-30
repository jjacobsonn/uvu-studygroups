import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import HomeAbtSection from './components/HomeAbtSection';
import SearchForStudyGroups from './components/SearchForStudyGroups';
import Courses from './components/Courses';
import StudentResources from './components/StudentResources';
import Footer from './components/Footer';
import JoinStudyGroup from './components/JoinStudyGroup';
import JoinGroup from './components/JoinGroup';
import CreateStudyGroup from './components/CreateStudyGroup';

import './styles/index.css';
import './styles/SearchForStudyGroups.css';
import './styles/CourseCard.css';
import './styles/StyledHeader.css';
import './styles/StudentResources.css';
import './styles/Footer.css';
import './styles/CreateStudyGroup.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Banner />
            <HomeAbtSection />
            <SearchForStudyGroups />
            <Courses setCurrentPage={setCurrentPage} />
            <StudentResources />
          </>
        );
      case 'join-study-group':
        return <JoinStudyGroup setCurrentPage={setCurrentPage} />;
      case 'join-group':
        return <JoinGroup />;
      case 'create-study-group':
        return <CreateStudyGroup setCurrentPage={setCurrentPage} />;
      default:
        return (
          <>
            <Banner />
            <HomeAbtSection />
            <SearchForStudyGroups />
            <Courses setCurrentPage={setCurrentPage} />
            <StudentResources />
          </>
        );
    }
  };

  return (
    <div className="App app-container">
      <NavigationBar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
