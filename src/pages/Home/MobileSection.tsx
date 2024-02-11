import { motion } from "framer-motion";

const MobileSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mobile-section">
        <div>
          <h2>Mobile support</h2>
          <p>Enjoy all features in your campaign with your phone or tablet!</p>
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
