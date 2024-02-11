import React from "react";
import { motion } from "framer-motion";

const CombatTrackerSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="combat-tracker-section">
        <h2>Track the combat stats</h2>
        <div className="combat-video">EM BREVE</div>
      </div>
    </motion.section>
  );
};

export default CombatTrackerSection;
