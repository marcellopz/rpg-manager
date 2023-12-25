import React from "react";

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
        <h2>You have unsaved changes to this page</h2>
        <div className="unsaved-changes-dialog-container">
          <button onClick={onClose}>Cancel</button>
          <button
            // style={{ backgroundColor: "red" }}
            onClick={() => {
              discard();
              onClose();
            }}
          >
            Discard changes
          </button>
          <button
            onClick={() => {
              save();
              onClose();
            }}
            style={{ backgroundColor: "green" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveIsNeededDialog;
