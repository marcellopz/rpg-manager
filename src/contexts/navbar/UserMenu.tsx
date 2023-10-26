import React, { useContext, useState, useRef, useEffect } from "react";
import "./usermenu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAuthenticated } = useContext(AuthContext);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-profile" ref={menuRef}>
      <div className="user-icon" onClick={() => setIsOpen(!isOpen)}>
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
      {isOpen && (
        <div className="navbar-user-dropdown">
          <ul>
            <Link to="/profile">
              <li>Profile</li>
            </Link>
            <Link to="/settings">
              <li>Settings</li>
            </Link>
            <li className="divider"></li>
            <Link to="/logout">
              <li>Log Out</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
