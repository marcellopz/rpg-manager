import React, { useContext, useState, useRef, useEffect } from "react";
import "./usermenu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";
import { useTranslation } from "react-i18next";
import CheckInvitesDialog from "./CheckInvitesDialog";

const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { authUser, handleUserEditProfile, invites } = useContext(AuthContext);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [openInvites, setOpenInvites] = useState<boolean>(false);

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
      {invites.length > 0 && (
        <div className="relative">
          <p className="img-notif circled-red">{invites.length}</p>
        </div>
      )}
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
              // onClick={handleUserEditProfile}
            >
              <li
                className="flex space-between"
                onClick={() => setOpenInvites(true)}
              >
                <p>{t("INVITES_LABEL")}</p>
                {invites.length > 0 && (
                  <p className="circled-red">{invites.length}</p>
                )}
              </li>
            </div>
            <div
              className="cursor-pointer"
              onClick={handleUserEditProfile}
            >
              <li>{t("EDIT_PROFILE")}</li>
            </div>
            <li className="divider-menu"></li>
            <Link to="/signout">
              <li>{t("NAV_LOGOUT")}</li>
            </Link>
          </ul>
        </div>
      )}
      <CheckInvitesDialog
        open={openInvites}
        onClose={() => setOpenInvites(false)}
      />
    </>
  );
};

export default UserMenu;
