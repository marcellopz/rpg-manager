import { useParams } from "react-router-dom";
import { updateCombatDetails } from "../../../../../../../contexts/firebase/database";
import { useContext } from "react";
import { DetailsContext } from "../../../../../context/DetailsContext";
import { t } from "i18next";

type Props = {
  open: boolean;
  onClose: () => void;
  closeAll: () => void;
};

const ConfirmEndCombatDialog = ({ open, onClose, closeAll }: Props) => {
  const { fetchCombatDetails } = useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();
  if (!open) {
    return null;
  }

  const handleEndCombat = () => {
    return updateCombatDetails(id as string, null).then(() => {
      fetchCombatDetails();
    });
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
          <h2>{t("COMBAT_END_CONFIRM")}</h2>
          <div className="flex gap-10">
            <button onClick={onClose}>{t("CANCEL_BTN")}</button>
            <button
              onClick={() => {
                handleEndCombat().then(() => {
                  onClose();
                  closeAll();
                });
              }}
              id="end-combat"
            >
              {t("COMBAT_END")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEndCombatDialog;