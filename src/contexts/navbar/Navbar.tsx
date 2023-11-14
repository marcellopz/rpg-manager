import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LanguageSwitch from "./LanguageSwitch";
import UserMenu from "./UserMenu";
import { useTranslation } from "react-i18next";

export interface NavbarLink {
  to: string;
  label: string;
  role: string;
}

export interface NavbarProps {
  links: NavbarLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { t } = useTranslation();

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
        <Link to="/">{t('APP_NAME')}</Link>
      </button>
      <ul>
        {links.map((link) => (
          <li key={link.to} role={link.role}>
            <Link to={link.to}>{t(link.label)}</Link>
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
