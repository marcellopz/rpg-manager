import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function LanguageSwitch() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="language-changer"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <div id="language-toggle">
        <img src="src/assets/flags/us.png" id="language-flag" />
        <img id="language-toggle-arrow" src="src/assets/arrow.svg" />
      </div>
      {isMenuOpen && (
        <div className="language-menu" ref={menuRef}>
          <ul>
            <li onClick={() => console.log("br")}>
              <img src="src/assets/flags/br.png" width={30} />
              BR
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
