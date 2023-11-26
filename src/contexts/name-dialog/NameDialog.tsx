import React, { useState } from "react";
import "./nameDialog.css";

interface NameDialogProps {
  open: boolean;
  onSave: (name: string, profilePicture: string) => void;
  onClose: () => void;
}

const NameDialog: React.FC<NameDialogProps> = ({ open, onSave, onClose }) => {
  const [name, setName] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

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
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Enter your name and profile picture</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username*
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            {error && <p className="error">You must enter a username</p>}
          </label>
          <br />
          <label>
            Profile Picture URL
            <input
              type="text"
              value={profilePicture}
              onChange={handleProfilePictureChange}
            />
          </label>
          <br />
          <button type="submit">Save</button>
          {/* <button
          type="button"
          onClick={onClose}
        >
          Cancel
        </button> */}
        </form>
      </div>
    </div>
  );
};

export default NameDialog;
