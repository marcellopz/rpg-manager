import React, { useContext, useState, useRef, useEffect } from "react";
import "./usermenu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAuthenticated } = useContext(AuthContext);
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

  return (
    <>
      <div id="name" onClick={() => setIsOpen((prev) => !prev)}>
        John Doe
      </div>
      <div id="img" onClick={() => setIsOpen((prev) => !prev)}>
        <img src="https://img.freepik.com/vetores-gratis/design-de-vetores-coloridos-de-maca_341269-1123.jpg?w=2000" />
      </div>
      {isOpen && (
        <div className="navbar-user-dropdown" ref={menuRef}>
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
    </>
  );
};

export default UserMenu;
