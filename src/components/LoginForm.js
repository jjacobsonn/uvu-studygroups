import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import discordIcon from '../icons/discord.png';
import customIcon from '../icons/dg-person-7.png';
import studyGroupImage from '../images/img-5.jpg';

const LoginForm = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Scroll to the top of the page when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store JWT token
        setIsAuthenticated(true);
        setErrorMessage('');
        setCurrentPage('welcome'); // Redirect to the Welcome Page after login
      } else {
        setErrorMessage('The username or password you entered is incorrect.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="App app-container">
      <Banner />

      {/* New Section: Header, Image, Lines, and Icon */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>
            LOGIN TO YOUR <span style={{ fontWeight: 'bold' }}>STUDY GROUP</span>
          </h2>
          <p className="lato-regular mb-6">
            Welcome to the UVU Study Groups login page, where your next step towards academic success begins. By logging in, you gain access to a dynamic platform designed to enhance your learning experience through collaboration and shared knowledge. Here, you can seamlessly join your study groups, access vital course materials, and engage in productive discussions with your peers. Whether you're here to catch up on assignments, prepare for exams, or dive into group projects, logging in ensures that you are connected to the resources and people that will help you achieve your goals. Secure your spot in the academic community and take advantage of the powerful tools at your fingertips.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={studyGroupImage} alt="Study Group" className="home-abt-image" />
        </div>
      </div>
      <div className="create-study-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">SECURE YOUR SPOT IN A STUDY GROUP</h2>
        <div className="create-study-group-line-with-icon flex items-center justify-center">
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="create-study-group-icon" />
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
      </div>
      {/* End of New Section */}

      <div className="login-page-container py-8">
        <div className="login-form-wrapper">
          {isAuthenticated ? (
            <div className="success-card bg-green-800 rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">Logged In Successfully</h2>
              <button
                className="btn-green w-full mx-auto mt-6 mb-6"
                onClick={() => setCurrentPage('welcome')} // Redirect to the Welcome Page when clicking the button
              >
                View Study Groups
              </button>
            </div>
          ) : (
            <div className="login-form-container bg-green-800 rounded-lg p-8 max-w-lg mx-auto">
              <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">LOGIN BELOW</h2>
              <p className="text-center text-white mb-4 text-lg">Log in to explore your study group resources</p>

              <button className="discord-button bg-white text-green-800 font-bold py-3 px-6 rounded w-full mb-4 flex items-center justify-center">
                <img src={discordIcon} alt="Discord Icon" className="mr-3 discord-icon" />
                <span className="text-2xl">Authenticate with Discord</span>
              </button>

              <div className="flex items-center my-4 or-sign-in-text">
                <hr className="flex-grow border-gray-300" />
                <span className="text-white px-3 whitespace-nowrap">Or sign in with email</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <form onSubmit={handleLogin}>
                <div className="form-group mb-4">
                  <label className="text-white block mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-control bg-white text-green-800 p-2 rounded w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group form-group-password mb-4">
                  <label className="text-white block mb-2 mt-4">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="form-control bg-white text-green-800 p-2 rounded w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessage && <p className="error-message text-red-500 mb-4">{errorMessage}</p>}
                
                {/* Updated Section for "Remember me" and "Forgot password?" */}
                <div className="remember-forgot-container mb-6">
                  <div className="remember-me-container">
                    <input type="checkbox" className="custom-checkbox" />
                    <label className="text-white remember-me-label">Remember me</label>
                  </div>
                  <a href="#" className="text-white forgot-password-link">Forgot password?</a>
                </div>

                <button type="submit" className="btn-green w-full mx-auto">LOGIN</button>
              </form>
            </div>
          )}
        </div>
      </div>
      <StudentResources />
    </div>
  );
};

export default LoginForm;