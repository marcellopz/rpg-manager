import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import "./nameDialog.css";

interface NameDialogProps {
  open: boolean;
  onSave: (name: string, profilePicture: string) => void;
  onClose: () => void;
}

const NameDialog: React.FC<NameDialogProps> = ({ open, onSave, onClose }) => {
  const [name, setName] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  if (!open) {
    return null;
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfilePicture(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name) {
      setError(true);
      return;
    }
    onSave(name, profilePicture);
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
        <h2>{t("ENTER_NAME_PICTURE")}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username*
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            {error && <p className="error">{t("ERROR_USERNAME")}</p>}
          </label>
          <br />
          <label>
            {t("PROFILE_PICTURE_LABEL")}
            <input
              type="text"
              value={profilePicture}
              onChange={handleProfilePictureChange}
            />
          </label>
          <br />
          <button type="submit">{t("SAVE")}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default NameDialog;
