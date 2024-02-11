import { motion } from "framer-motion";

const ManageInventorySection = () => {
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
          <h2>Manage the party's inventory</h2>
          <p>
            Manage the whole party's inventory. With it you can:
            <ul>
              <li>Add, remove, edit and move items around characters.</li>
              <li>
                Keep track of characters gold, silver and copper pieces at any
                time
              </li>
              <li>
                Keep track of items weight and characters' carrying capacity.
              </li>
            </ul>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ManageInventorySection;
