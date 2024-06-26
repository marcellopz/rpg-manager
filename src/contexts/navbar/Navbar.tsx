import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LanguageSwitch from "./LanguageSwitch";
import UserMenu from "./UserMenu";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const navbar = document.querySelector("nav");
    const scrollCallback = () => {
      if (window.scrollY > 0) {
        // If page is scrolled down, add the shadow class
        navbar?.classList.add("navbar-shadow");
        navbar?.classList.remove("navbar-shadow-top");
      } else {
        // If page is at the top, remove the shadow class
        navbar?.classList.remove("navbar-shadow");
        navbar?.classList.add("navbar-shadow-top");
      }
    };
    document.addEventListener("scroll", scrollCallback);
    scrollCallback();
  }, []);

  return (
    <nav>
      <Link
        to="/"
        id="nav-btn-black"
      >
        <img
          src="/assets/dado2.svg"
          alt="logo"
        />
        <span>{t("APP_NAME")}</span>
      </Link>
      <ul>
        <li
          role={"campaign"}
          className={
            window.location.pathname.startsWith("/campaigns")
              ? "campaign-nav-link"
              : ""
          }
        >
          <Link to={"campaign"}>{t("NAV_CAMPAIGNS")}</Link>
        </li>
      </ul>
      <div id="name-and-icon-container">
        <LanguageSwitch />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
