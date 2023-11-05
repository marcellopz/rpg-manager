import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LanguageSwitch from "./LanguageSwitch";
import UserMenu from "./UserMenu";

interface NavbarProps {
  links: { to: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  useEffect(() => {
    const navbar = document.querySelector("nav");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        // If page is scrolled down, add the shadow class
        navbar?.classList.add("navbar-shadow");
      } else {
        // If page is at the top, remove the shadow class
        navbar?.classList.remove("navbar-shadow");
      }
    });
  }, []);

  return (
    <nav>
      <button id="nav-btn-black">
        <Link to="/">RPG Manager</Link>
      </button>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div id="name-and-icon-container">
        <LanguageSwitch />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
