import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HomeHeader = () => {
  const { t } = useTranslation();
  return (
    <header>
      {/* <div id="dark-gradient"></div> */}
      <div className="header-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="header-text"
        >
          <span>
            <img
              src="assets/favicon.ico"
              height={50}
            />
            <h1>RPG Manager</h1>
          </span>
          <p>{t("HOME_SUBTITLE")}</p>
          {/* <div className="header-buttons">
            <button>Sign Up</button>
            <button>Try the demo Campaign</button>
          </div> */}
        </motion.div>
      </div>
    </header>
  );
};

export default HomeHeader;
