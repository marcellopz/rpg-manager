import { useParams } from "react-router-dom";
import { updateCombatDetails } from "../../../../../../../contexts/firebase/database";
import { useContext } from "react";
import { DetailsContext } from "../../../../../context/DetailsContext";

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
          <h2>End combat?</h2>
          <div className="flex gap-10">
            <button onClick={onClose}>Cancel</button>
            <button
              onClick={() => {
                handleEndCombat().then(() => {
                  onClose();
                  closeAll();
                });
              }}
              id="end-combat"
            >
              End combat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEndCombatDialog;
