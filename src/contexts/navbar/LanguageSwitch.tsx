import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../firebase/database";
import auth from "../firebase/firebase";
import { motion } from "framer-motion";

const languages = [
  {
    flag: "/assets/flags/us.png",
    code: "en",
  },
  {
    flag: "/assets/flags/br.png",
    code: "br",
  },
];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
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
        <div id="language-flag">
          {languages
            .filter((language) => language.code === i18n.language)
            .map((lang) => (
              <img
                src={lang.flag}
                key={lang.code}
              />
            ))}
        </div>
        <img
          id="language-toggle-arrow"
          src="/assets/arrow.svg"
        />
      </div>
      {isMenuOpen &&
        languages
          .filter((language) => language.code !== i18n.language)
          .map((lang) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="language-menu"
              ref={menuRef}
              key={lang.code}
            >
              <ul>
                <li
                  onClick={() => {
                    setLanguage(auth.currentUser?.uid as string, lang.code);
                    i18n.changeLanguage(lang.code);
                  }}
                >
                  <img
                    src={lang.flag}
                    width={30}
                  />
                  <p>{lang.code}</p>
                </li>
              </ul>
            </motion.div>
          ))}
    </div>
  );
}
