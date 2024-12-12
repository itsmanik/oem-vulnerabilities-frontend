import React, { useState } from "react";

const SettingPage = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    country: "earth",
    statusBar: false,
    weeklyDigest: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleToggle = (name) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: !prevDetails[name],
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">SETTINGS</h1>
        <div className="text-center mb-6">
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-600 font-medium mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-600 font-medium mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-600 font-medium mb-2"
            >
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={userDetails.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notification Toggles */}
          <div className="mb-4">
            <h2 className="text-gray-600 font-medium mb-2">NOTIFICATIONS</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">About Site</span>
              <button
                type="button"
                onClick={() => handleToggle("statusBar")}
                className={`w-10 h-6 flex items-center rounded-full ${
                  userDetails.statusBar ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                    userDetails.statusBar ? "translate-x-4" : ""
                  }`}
                ></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Change Password</span>
              <button
                type="button"
                onClick={() => handleToggle("weeklyDigest")}
                className={`w-10 h-6 flex items-center rounded-full ${
                  userDetails.weeklyDigest ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                    userDetails.weeklyDigest ? "translate-x-4" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => alert("Changes saved!")}
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingPage;
