import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axiosInstance from '../../axios'; // Import your axios instance
import EmailInputWithOTP from './login/EmailInputWithOTP';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // React Router's navigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { access_token, user } = response.data;

      // Save the token in localStorage
      localStorage.setItem('access_token', access_token);

      // Navigate to home page
      navigate('/');
      console.log(`Welcome ${user.username}!`); // Optional: Debug or log the user data
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Login failed. Please try again.');
      console.error('Login error:', error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Login</h2>

        <EmailInputWithOTP
          email={email}
          setEmail={setEmail}
          isOtpVerified={isOtpVerified}
          setIsOtpVerified={setIsOtpVerified}
        />

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {errorMessage && (
          <p className="mb-4 text-red-500 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={!email || !password || !isOtpVerified || isLoading}
          className={`w-full py-2 rounded-md text-white ${
            email && password && isOtpVerified && !isLoading
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
