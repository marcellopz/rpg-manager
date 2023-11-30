import React from "react";
import { AuthContext } from "../authContext";
import { acceptInvite } from "../firebase/database";

type CheckInvitesDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CheckInvitesDialog: React.FC<CheckInvitesDialogProps> = ({
  open,
  onClose,
}) => {
  const { invites } = React.useContext(AuthContext);

  if (!open) {
    return null;
  }

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <div
        className="dialog dialog-width"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Your campaign invites:</h2>
        <div>
          {invites.length === 0 ? (
            <p>You have no invites</p>
          ) : (
            invites.map((invite, i) => (
              <div
                className="invite-item"
                key={i}
              >
                <p className="invite-name">{invite.campaignName}</p>
                <p
                  title="accept"
                  className="cursor-pointer"
                  onClick={() => {
                    acceptInvite(invite.campaignId);
                  }}
                >
                  ✅
                </p>
                <p
                  title="decline"
                  className="cursor-pointer"
                >
                  ❌
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckInvitesDialog;
