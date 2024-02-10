import React from "react";
import { addCategoryCampaign } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";
import { CategoryType } from "../campaignTypes";
import { t } from "i18next";
import { motion } from "framer-motion";

type AddCategoryDialogProps = {
  open: boolean;
  onClose: () => void;
  publicSelected: boolean;
};

const AddCategoryDialog: React.FC<AddCategoryDialogProps> = ({
  open,
  onClose,
  publicSelected,
}) => {
  const [categoryName, setCategoryName] = React.useState<string>("");
  const [categoryType, setCategoryType] = React.useState<string>("normal");
  const [error, setError] = React.useState<boolean>(false);
  const { id } = useParams();
  const { authUser } = React.useContext(AuthContext);
  const { fetchAll } = React.useContext(DetailsContext);

  if (!open) {
    return null;
  }

  const addCategory = () => {
    const newCategory: CategoryType = {
      name: categoryName,
      inventory: categoryType === "inventory",
      tabs: {},
    };
    addCategoryCampaign(
      id as string,
      newCategory,
      publicSelected ? "" : (authUser as User).uid
    );
    fetchAll();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!categoryName) {
      setError(true);
      return;
    }
    addCategory();
    setCategoryName("");
    onClose();
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
        <h2>{t("NEW_CATEGORY_PROMPT")}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t("NEW_CATEGORY_LABEL")}*
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            {error && <p className="error">{t("NEW_CATEGORY_ERROR")}</p>}
          </label>
          {publicSelected && (
            <label>
              {t("NEW_CATEGORY_TYPE_LABEL")}:
              <select
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value)}
              >
                <option value="normal">{t("CATEGORY_TYPE_NORMAL")}</option>
                <option value="inventory">
                  {t("CATEGORY_TYPE_INVENTORY")}
                </option>
              </select>
            </label>
          )}

          <button type="submit">{t("CREATE_BTN")}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddCategoryDialog;
