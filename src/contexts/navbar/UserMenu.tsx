import React, { useContext, useState, useRef, useEffect } from "react";
import "./usermenu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";
import { useTranslation } from "react-i18next";

const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { authUser, handleUserEditProfile } = useContext(AuthContext);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!authUser) {
    return (
      <Link to="/authenticate">
        <div
          id="name"
          onClick={() => setIsOpen((prev) => !prev)}
          ref={menuRef}
        >
          {t("NAV_LOGIN")}
        </div>
      </Link>
    );
  }

  return (
    <>
      <div
        id="name"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={menuRef}
      >
        {authUser.displayName === "" ? "undefined" : authUser.displayName}
      </div>
      <div
        id="img"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={
            authUser.photoURL
              ? authUser.photoURL
              : "https://img.freepik.com/vetores-gratis/design-de-vetores-coloridos-de-maca_341269-1123.jpg?w=2000"
          }
        />
      </div>
      {isOpen && (
        <div
          className="navbar-user-dropdown"
          ref={menuRef}
        >
          <ul>
            <Link to="/profile">
              <li>{t("NAV_PROFILE")}</li>
            </Link>
            <div
              className="cursor-pointer"
              onClick={handleUserEditProfile}
            >
              <li>Edit profile</li>
            </div>
            <li className="divider-menu"></li>
            <Link to="/signout">
              <li>{t("NAV_LOGOUT")} Out</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default UserMenu;
