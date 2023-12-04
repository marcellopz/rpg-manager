import React, { useContext } from "react";
import auth from "../../../contexts/firebase/firebase";
import { addNewCampaign } from "../../../contexts/firebase/database";
import { CampaignType, PlayerType } from "../campaignTypes";
import { AuthContext } from "../../../contexts/authContext";
import LoadImage from "../../../generic-components/load-image/LoadImage";

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
      } as PlayerType,
    },
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
  const { authUser } = useContext(AuthContext);

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

  if (authUser === null) {
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
          <h2>You have to log in to create a campaign</h2>
          <button>
            <a href="/authenticate">Log in</a>
          </button>
        </div>
      </div>
    );
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
          <LoadImage
            setImageBlob={setImageURL}
            sizeLimit={2000000}
          />
          <br />
          <button type="submit">Save</button>
        </form>
        <p style={{ marginTop: "5px" }}>Player invites get configured later</p>
      </div>
    </div>
  );
};

export default NewCampaignDialog;
