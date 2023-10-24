import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../authContext";

interface NavbarProps {
  links: { to: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="src/assets/rpglogo.png" alt="logo" height="64px" />
        </Link>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="user-profile">
        <div>
          {isAuthenticated ? (
            <Link to="/profile">
              <img src="" alt="profile" height="64px" />
            </Link>
          ) : (
            <Link to="/login">
              <img src="src/assets/user.png" alt="profile" height="64px" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
