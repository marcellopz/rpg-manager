import React from "react";
import {
  getUidByEmail,
  invitePlayer,
} from "../../../contexts/firebase/database";
import { t } from "i18next";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("INVITE_PROMPT")}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t("INVITE_PROMPT")}*
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error">{t("INVITE_ERROR")}</p>}
          </label>
          <button type="submit">{t("INVITE_BTN")}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default InvitePlayerDialog;
