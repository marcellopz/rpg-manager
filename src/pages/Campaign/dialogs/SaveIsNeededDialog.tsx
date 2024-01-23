import React from "react";
import { t } from "i18next";

interface Props {
  open: boolean;
  onClose: () => void;
  save: () => void;
  discard: () => void;
}

const SaveIsNeededDialog: React.FC<Props> = ({
  open,
  onClose,
  save,
  discard,
}) => {
  // Add your component logic here

  if (!open) {
    return null;
  }

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("CAMPAIGN_UNSAVED_CHANGES")}</h2>
        <div className="unsaved-changes-dialog-container">
          <button onClick={onClose}>{t("CANCEL")}</button>
          <button
            onClick={() => {
              discard();
              onClose();
            }}
          >
            {t("CANCEL")}
          </button>
          <button
            onClick={() => {
              save();
              onClose();
            }}
            style={{ backgroundColor: "green" }}
          >
            {t("SAVE")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveIsNeededDialog;
