import React from "react";
import {
  getUidByEmail,
  invitePlayer,
} from "../../../contexts/firebase/database";

type InvitePlayerDialogProps = {
  campaignId: string;
  campaignName: string;
  open: boolean;
  onClose: () => void;
};

const InvitePlayerDialog: React.FC<InvitePlayerDialogProps> = ({
  campaignName,
  campaignId,
  open,
  onClose,
}) => {
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  if (!open || !campaignId) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    getUidByEmail(email).then((playerId) => {
      if (!playerId) {
        setError(true);
        return;
      }
      invitePlayer(campaignId, campaignName, email, playerId).then(onClose);
    });
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
        <h2>Enter the new player email</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Player email*
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error">This player email doesn't exist</p>}
          </label>
          <button type="submit">Invite</button>
        </form>
      </div>
    </div>
  );
};

export default InvitePlayerDialog;
