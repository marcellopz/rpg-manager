import { motion } from "framer-motion";

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
          <h2>Master Your Campaign</h2>
          <p>
            Streamline your adventure with our comprehensive tools designed for
            table RPG enthusiasts. Organize your campaign information
            effortlessly with customizable categories, manage character sheets,
            and collaborate seamlessly with your party. Our platform ensures
            that every detail of your journey is just a click away, enabling you
            and your fellow adventurers to focus on the story ahead.
          </p>
        </div>
        <div className="items-right">
          <ManageInfoItem
            title="Categories & Subcategories"
            text="Organize your campaign's lore, quests, and NPCs with ease. Use categories and subcategories to keep your information structured and accessible."
            icon="/assets/home/diagram.png"
          />
          <ManageInfoItem
            title="Character Sheet Management"
            text="Keep your character's journey at your fingertips. Store and update character sheets with all the crucial stats and backstory details."
            icon="/assets/home/file.png"
          />
          <ManageInfoItem
            title="Rich Text Editing"
            text="Bring your campaign to life with rich text features. Highlight important details, use bullet points for quests, and italicize magical items."
            icon="/assets/home/text-formatting.png"
          />
          <ManageInfoItem
            title="Player Invitations"
            text="Expand your adventure by inviting players directly via email. Seamless integration allows for quick access to the campaign for all invited members."
            icon="/assets/home/email.png"
          />
          <ManageInfoItem
            title="Public & Private Sections"
            text="Share information with your party through public categories, or keep personal notes and strategies hidden in your private section."
            icon="/assets/home/visibility.png"
          />
          <ManageInfoItem
            title="Collaboration Made Easy"
            text="Collaborate in real-time with your party. Share updates, plan your next move, and navigate your campaign together."
            icon="/assets/home/partnership.png"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ManageInfoSection;
