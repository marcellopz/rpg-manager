import React from "react";
import { deleteCategory, deleteTab } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";
import { t } from "i18next";
import { motion } from "framer-motion";

type ConfirmDeleteDialogProps = {
  open: boolean;
  onClose: () => void;
  publicSelected: boolean;
  category: { id: string; name: string };
  tab: { id: string; name: string } | null;
};

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
  open,
  onClose,
  publicSelected,
  category,
  tab,
}) => {
  const { id } = useParams();
  const { authUser } = React.useContext(AuthContext);
  const { fetchAll } = React.useContext(DetailsContext);

  if (!open) {
    return null;
  }

  const deleteTabOrCategory = () => {
    if (tab) {
      deleteTab(
        id as string,
        category.id,
        tab.id,
        publicSelected ? "" : (authUser as User).uid
      );
    } else {
      deleteCategory(
        id as string,
        category.id,
        publicSelected ? "" : (authUser as User).uid
      );
    }
    fetchAll();
    onClose();
    // resetIds();
  };

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>
          {t("DELETE_TAB_CATEGORY_CONFIRM")} {tab ? tab.name : category.name}
        </h2>
        <div className="confirm-button-container">
          <button
            onClick={onClose}
            className="button-cancel"
          >
            {t("CANCEL_BTN")}
          </button>
          <button
            onClick={deleteTabOrCategory}
            className="button-delete"
          >
            {t("DELETE_BTN")}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmDeleteDialog;
