import { motion } from "framer-motion";

const ManageInfoItem = ({ title, text, icon }: any) => {
  return (
    <div className="manage-info-item">
      <div className="manage-info-item-icon">
        <img
          src={icon}
          width={70}
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
          <h2>Manage your campaigns</h2>
          <p>
            RPG Manager allows you to create and manage your campaigns. You can
            create new campaigns, edit existing ones, and delete them.
          </p>
        </div>
        <div className="items-right">
          <ManageInfoItem
            title="Create Campaigns"
            text="Create new campaigns and manage them."
            icon="/assets/weight.png"
          />
          <ManageInfoItem
            title="Manage Characters"
            text="Create and manage characters for your campaigns."
            icon="/assets/weight.png"
          />
          <ManageInfoItem
            title="Manage Items"
            text="Create and manage items for your campaigns."
            icon="/assets/weight.png"
          />
          <ManageInfoItem
            title="Another Item"
            text="Description of another item."
            icon="/assets/weight.png"
          />
          <ManageInfoItem
            title="Another Item"
            text="Description of another item."
            icon="/assets/weight.png"
          />
          <ManageInfoItem
            title="Another Item"
            text="Description of another item."
            icon="/assets/weight.png"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ManageInfoSection;
