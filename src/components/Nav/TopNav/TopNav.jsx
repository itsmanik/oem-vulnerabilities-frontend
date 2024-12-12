import React, { useState } from "react";
import "./TopNav.css"; // Import the CSS for styling
import { FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-navColor shadow-md flex justify-between items-center px-6 py-4 text-gray-200">
      {/* Left Section: Navigation Links */}
      <div className="navbar-left">
        <ul className="nav-links flex space-x-6 ml-10">
          <li>
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              Security Updates
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white transition-colors">
              Acknowledgements
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white transition-colors">
              Updates
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section: User Profile with Dropdown */}
      <div className="navbar-right relative">
        <div
          className="profile flex items-center space-x-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <FaUserCircle className="text-2xl text-gray-200 hover:text-white transition-colors" />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-navColor text-white rounded-md shadow-lg z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-navColor text-white cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-navColor text-white cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
