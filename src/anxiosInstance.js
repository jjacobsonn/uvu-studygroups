import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/api',
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token'); // Clear the stored token
      alert('Your session has expired. Please log in again.'); // Alert the user
      window.location.href = '/login'; // Redirect to the login page
    }
    return Promise.reject(error);
  }
);

export default instance;