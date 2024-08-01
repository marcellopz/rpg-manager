import { useParams } from "react-router-dom";
import { updateCombatDetails } from "../../../../../../../contexts/firebase/database";
import { useContext, useState } from "react";
import { DetailsContext } from "../../../../../context/DetailsContext";
import { t } from "i18next";
import { motion } from "framer-motion";
import { CombatType } from "../../../../../campaignTypes";

const EndCombatKeepPlayersDialog = ({
  open,
  onClose,
  keepPlayers,
  dontKeepPlayers,
}: {
  open: boolean;
  onClose: () => void;
  keepPlayers: () => void;
  dontKeepPlayers: () => void;
}) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className="dialog-background" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="dialog"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2>{t("COMBAT_KEEP_PLAYERS")}</h2>
          <div className="flex gap-10 justify-center">
            <button onClick={onClose}>{t("CANCEL")}</button>
            <button onClick={dontKeepPlayers}>{t("NO")}</button>
            <button onClick={keepPlayers}>{t("YES")}</button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

type Props = {
  open: boolean;
  onClose: () => void;
  closeAll: () => void;
};

const ConfirmEndCombatDialog = ({ open, onClose, closeAll }: Props) => {
  const { fetchCombatDetails, combatDetails } = useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();
  const [openKeepPlayers, setOpenKeepPlayers] = useState(false);
  if (!open) {
    return null;
  }

  const handleEndCombatKeepPlayers = () => {
    if (!combatDetails || !combatDetails.combatants) return;
    const newCombatants: CombatType["combatants"] = {};
    Object.entries(combatDetails.combatants).forEach(([id, c]) => {
      if (c.type === "player") {
        newCombatants[id] = { ...c };
      }
    });
    const newCombat: CombatType = {
      active: false,
      dmId: combatDetails.dmId,
      dmName: combatDetails.dmName,
      round: 0,
      turn: 0,
      combatants: newCombatants,
    };
    return updateCombatDetails(id as string, newCombat).then(() => {
      fetchCombatDetails();
      onClose();
      setOpenKeepPlayers(false);
    });
  };

  const handleEndCombatDontKeepPlayers = () => {
    return updateCombatDetails(id as string, null).then(() => {
      fetchCombatDetails();
      onClose();
      setOpenKeepPlayers(false);
      closeAll();
    });
  };

  return (
    <>
      <div className="dialog-background" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="dialog relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2>{t("COMBAT_END_CONFIRM")}</h2>
          <div className="flex gap-10 justify-center">
            <button onClick={onClose}>{t("CANCEL_BTN")}</button>
            <button
              onClick={() => {
                setOpenKeepPlayers(true);
              }}
              id="end-combat"
            >
              {t("COMBAT_END")}
            </button>
          </div>
        </motion.div>
      </div>
      <EndCombatKeepPlayersDialog
        open={openKeepPlayers}
        onClose={() => setOpenKeepPlayers(false)}
        keepPlayers={handleEndCombatKeepPlayers}
        dontKeepPlayers={handleEndCombatDontKeepPlayers}
      />
    </>
  );
};

export default ConfirmEndCombatDialog;
