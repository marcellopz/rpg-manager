import React from "react";
import auth from "../../../contexts/firebase/firebase";
import { addNewCampaign } from "../../../contexts/firebase/database";
import { CampaignType, PlayerType } from "../campaignTypes";

const saveCampaign = (name: string, description: string, imageURL: string) => {
  const newCampaign = {
    name,
    description,
    backdropImage: imageURL,
    creatorId: auth.currentUser?.uid,
    players: {
      [auth.currentUser?.uid as string]: {
        id: auth.currentUser?.uid,
        name: auth.currentUser?.displayName,
        avatar: auth.currentUser?.photoURL,
        categories: [],
      } as PlayerType,
    },
    config: {},
    categories: [],
  } as CampaignType;
  addNewCampaign(newCampaign).then(() => {
    window.location.reload();
  });
};

type NewCampaignDialogProps = {
  open: boolean;
  onClose: () => void;
};

const NewCampaignDialog: React.FC<NewCampaignDialogProps> = ({
  open,
  onClose,
}) => {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [imageURL, setImageURL] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  if (!open) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !description) {
      setError(true);
      return;
    }
    saveCampaign(name, description, imageURL);
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
        <h2>Enter the new campaign details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Campaign name*
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && <p className="error">You must enter a campaign name</p>}
          </label>
          <label>
            Campaign description*
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {error && (
              <p className="error">You must enter a campaign description</p>
            )}
          </label>
          <label>
            Campaign image (url)
            <input
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
        <p style={{ marginTop: "5px" }}>Player invites get configured later</p>
      </div>
    </div>
  );
};

export default NewCampaignDialog;
