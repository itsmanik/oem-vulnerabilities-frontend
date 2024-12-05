import "./TopNav.css"; // Import the CSS for styling
import { Text } from "@radix-ui/themes";
import { FaUserCircle } from "react-icons/fa";

const TopNav = () => {
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
        <div className="profile flex items-center space-x-2 cursor-pointer group">
          <FaUserCircle className="text-2xl text-gray-200 group-hover:text-white transition-colors" />
          {/* <span className="username hidden md:block">manik</span> */}
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-40 w-32 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block"></div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
