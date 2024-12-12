import React, { useState } from 'react';
//import EmailInputWithOTP from '../register/EmailInputWithOTP'; // Adjusted import path

const SettingPage = () => {
  const [email, setEmail] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Simulating a successful update for demo purposes
    setTimeout(() => {
      if (isOtpVerified) {
        setSuccessMessage('Email successfully updated!');
      } else {
        setErrorMessage('OTP verification failed. Please try again.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSaveChanges} className="bg-white p-8 shadow-md rounded-md w-[450px]">
        <h2 className="my-3 text-4xl font-bold text-center">Edit Profile</h2>
        <p className="text-center text-sm dark:text-gray-600 mb-6">Update your profile details</p>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <EmailInputWithOTP
            email={email}
            setEmail={setEmail}
            isOtpVerified={isOtpVerified}
            setIsOtpVerified={setIsOtpVerified}
          />
        </div>

        {errorMessage && (
          <p className="mb-4 text-red-500 text-sm">{errorMessage}</p>
        )}
        
        {successMessage && (
          <p className="mb-4 text-green-500 text-sm">{successMessage}</p>
        )}

        <button
          type="submit"
          disabled={!email || !isOtpVerified || isLoading}
          className={`w-full py-2 rounded-md text-white ${
            email && isOtpVerified && !isLoading
              ? 'bg-navColor hover:bg-darkNavColor'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Saving changes...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default SettingPage;