import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CombatTrackerSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="combat-tracker-section">
        <h2>{t("HOME_COMBAT_TITLE")}</h2>
        <div className="combat-video">EM BREVE</div>
      </div>
    </motion.section>
  );
};

export default CombatTrackerSection;
