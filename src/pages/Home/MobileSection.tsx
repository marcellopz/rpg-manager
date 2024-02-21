import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MobileSection = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mobile-section">
        <div>
          <h2>{t("HOME_MOBILE_SUPPORT_TITLE")}</h2>
          <p>{t("HOME_MOBILE_SUPPORT_TEXT")}</p>
        </div>
        <div className="mobile-image-div">
          <img
            src="https://i.imgur.com/rPo7i0b.png"
            id="mobile-picture"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MobileSection;
