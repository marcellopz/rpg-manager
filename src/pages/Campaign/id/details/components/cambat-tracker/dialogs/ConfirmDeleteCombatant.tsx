import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext } from "../../../../../context/DetailsContext";
import { CombatantTypeWithID } from "../CombatTrackerRowsDragNDrop";
import { updateCombatant } from "../../../../../../../contexts/firebase/database";
import { t } from "i18next";

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
        <div
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
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteCombatantDialog;
