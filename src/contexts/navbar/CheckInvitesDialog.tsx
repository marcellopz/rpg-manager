import React from "react";
import { AuthContext } from "../authContext";
import { acceptInvite } from "../firebase/database";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type CheckInvitesDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CheckInvitesDialog: React.FC<CheckInvitesDialogProps> = ({
  open,
  onClose,
}) => {
  const { invites } = React.useContext(AuthContext);
  const { t } = useTranslation();

  if (!open) {
    return null;
  }

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog dialog-width"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("CAMPAIGN_INVITES_TITLE")}</h2>
        <div>
          {invites.length === 0 ? (
            <p>{t("CAMPAIGN_NO_INVITES")}</p>
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
      </motion.div>
    </div>
  );
};

export default CheckInvitesDialog;
