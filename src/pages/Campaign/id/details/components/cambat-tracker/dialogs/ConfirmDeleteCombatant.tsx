import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext } from "../../../../../context/DetailsContext";
import { CombatantTypeWithID } from "../CombatTrackerRowsDragNDrop";
import { updateCombatant } from "../../../../../../../contexts/firebase/database";
import { t } from "i18next";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  combatant: CombatantTypeWithID;
};

const ConfirmDeleteCombatantDialog = ({ open, onClose, combatant }: Props) => {
  const { fetchCombatDetails } = useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();

  if (!open) {
    return null;
  }

  const handleDeleteCombatant = () => {
    updateCombatant(id as string, combatant.id, null);
    fetchCombatDetails();
    onClose();
  };

  return (
    <>
      <div
        className="dialog-background"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="dialog relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2>
            {t("DELETE_BTN")} {combatant.name}?
          </h2>
          <div className="flex gap-10">
            <button onClick={onClose}>{t("CANCEL_BTN")}</button>
            <button
              onClick={handleDeleteCombatant}
              id="delete"
            >
              {t("DELETE_BTN")}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ConfirmDeleteCombatantDialog;
