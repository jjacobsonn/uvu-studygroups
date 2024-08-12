import React, { useState } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import discordIcon from '../icons/discord.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      <div className="login-page-container py-8">
        <h1 className="page-header text-center text-green-800 text-4xl rajdhani-bold mb-4">Login To Your Study Group</h1>
        <div className="login-form-wrapper">
          {isAuthenticated ? (
            <div className="success-card bg-green-800 rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">Logged In Successfully</h2>
              <button className="btn-green w-full mx-auto mt-6 mb-6">
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
                <div className="flex items-center justify-between mb-6">
                  <label className="text-white flex items-center remember-me-label pl-2">
                    <input type="checkbox" className="mr-2 custom-checkbox" />
                    Remember me
                  </label>
                  <a href="#" className="text-white forgot-password-link pr-2">Forgot password?</a>
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