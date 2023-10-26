import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserMenu from "./UserMenu";

interface NavbarProps {
  links: { to: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
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
      <UserMenu />
    </nav>
  );
};

export default Navbar;
