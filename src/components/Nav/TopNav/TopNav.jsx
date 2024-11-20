import "./TopNav.css"; // Import the CSS for styling
import { Text } from "@radix-ui/themes";

const TopNav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li>
            <a href="#home"><Text size={"3"}>Home</Text></a>
          </li>
          <li>
            <a href="#about">Security updates</a>
          </li>
          <li>
            <a href="#services">Acknowledgements</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="profile">
          <span className="username">Log Out</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
