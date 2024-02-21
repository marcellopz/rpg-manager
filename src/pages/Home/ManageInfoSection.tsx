import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ManageInfoItem = ({ title, text, icon }: any) => {
  return (
    <div className="manage-info-item">
      <div className="manage-info-item-icon">
        <img
          src={icon}
          height={70}
        />
      </div>
      <div className="manage-info-item-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const ManageInfoSection = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="manage-info"
    >
      <div className="manage-info-content">
        <div className="left-text">
          <h2>{t("HOME_MANAGE_INFO_TITLE")}</h2>
          <p>{t("HOME_MANAGE_INFO_DESC")}</p>
          <div className="info-content-buttons">
            <Link to="/campaign">
              <button>{t("HOME_MANAGE_INFO_BUTTON_1")}</button>
            </Link>
            <Link to="/demo-campaign/1">
              <button>{t("HOME_MANAGE_INFO_BUTTON_2")}</button>
            </Link>
          </div>
        </div>
        <div className="items-right">
          <ManageInfoItem
            title={t("HOME_MANAGE_INFO_ITEM_1_TITLE")}
            text={t("HOME_MANAGE_INFO_ITEM_1_TEXT")}
            icon="/assets/home/diagram.png"
          />
          <ManageInfoItem
            title={t("HOME_MANAGE_INFO_ITEM_2_TITLE")}
            text={t("HOME_MANAGE_INFO_ITEM_2_TEXT")}
            icon="/assets/home/file.png"
          />
          <ManageInfoItem
            title={t("HOME_MANAGE_INFO_ITEM_3_TITLE")}
            text={t("HOME_MANAGE_INFO_ITEM_3_TEXT")}
            icon="/assets/home/text-formatting.png"
          />
          <ManageInfoItem
            title={t("HOME_MANAGE_INFO_ITEM_4_TITLE")}
            text={t("HOME_MANAGE_INFO_ITEM_4_TEXT")}
            icon="/assets/home/email.png"
          />
          <ManageInfoItem
            title={t("HOME_MANAGE_INFO_ITEM_5_TITLE")}
            text={t("HOME_MANAGE_INFO_ITEM_5_TEXT")}
            icon="/assets/home/visibility.png"
          />
          <ManageInfoItem
            title={t("HOME_MANAGE_INFO_ITEM_6_TITLE")}
            text={t("HOME_MANAGE_INFO_ITEM_6_TEXT")}
            icon="/assets/home/partnership.png"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ManageInfoSection;
