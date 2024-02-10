import { motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const GenericDialog = ({ open, onClose }: Props) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="dialog-background"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="dialog relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          xd
        </motion.div>
      </div>
    </>
  );
};

export default GenericDialog;
