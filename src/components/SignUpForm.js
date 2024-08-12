import React, { useState } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import discordIcon from '../icons/discord.png';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, studentId, email, password }),
      });

      if (response.ok) {
        // Redirect to login page or display a success message
        setErrorMessage('');
        // For example, redirect to login
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'An error occurred during registration.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="App app-container">
      <Banner />
      <div className="sign-up-page-container py-8">
        <h1 className="page-header text-center text-green-800 text-4xl rajdhani-bold mb-6">Get Started Create Your Account</h1>
        <div className="sign-up-form-container bg-green-800 rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-center text-white text-3xl rajdhani-bold mb-4">REGISTER BELOW</h2>
          <p className="text-center text-white mb-4 text-lg">Study with a group starting today</p>

          <button className="discord-button bg-white text-green-800 font-bold py-3 px-6 rounded w-full mb-4 flex items-center justify-center">
            <img src={discordIcon} alt="Discord Icon" className="mr-3 discord-icon" />
            <span className="text-2xl">Continue with Discord</span>
          </button>

          <div className="flex items-center my-4 or-sign-in-text">
            <hr className="flex-grow border-gray-300" />
            <span className="text-white px-3 whitespace-nowrap">Or register with email</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleSignUp}>
            <div className="form-group mb-4">
              <label className="text-white block mb-2">First Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="form-control bg-white text-green-800 p-2 rounded w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label className="text-white block mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="form-control bg-white text-green-800 p-2 rounded w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label className="text-white block mb-2">Student ID</label>
              <input
                type="text"
                placeholder="Enter Your Student ID"
                className="form-control bg-white text-green-800 p-2 rounded w-full"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
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
            <div className="form-group form-group-password mb-4">
              <label className="text-white block mb-2 mt-4">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter Previous Password"
                className="form-control bg-white text-green-800 p-2 rounded w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="error-message text-red-500 mb-4">{errorMessage}</p>}
            <button type="submit" className="btn-green w-full mx-auto">REGISTER</button>
          </form>
        </div>
      </div>
      <StudentResources />
    </div>
  );
};

export default SignUpForm;