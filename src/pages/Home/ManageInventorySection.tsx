import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ManageInventorySection = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="manage-inventory"
    >
      <div className="manage-inventory-content">
        <div className="picture-left">
          <img
            src="https://i.imgur.com/YtzcHRX.png"
            id="inventory-picture"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inventory-text"
        >
          <h2>{t("HOME_MANAGE_PARTY_INVENTORY_TITLE")}</h2>
          <p>
            {t("HOME_MANAGE_PARTY_INVENTORY_TEXT_INTRO")}
            <ul>
              <li>{t("HOME_MANAGE_PARTY_INVENTORY_TEXT_1")}</li>
              <li>{t("HOME_MANAGE_PARTY_INVENTORY_TEXT_2")}</li>
              <li>{t("HOME_MANAGE_PARTY_INVENTORY_TEXT_3")}</li>
            </ul>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ManageInventorySection;
