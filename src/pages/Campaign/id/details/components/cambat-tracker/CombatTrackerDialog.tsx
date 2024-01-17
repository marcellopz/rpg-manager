import { useContext, useState } from "react";
import "./combat.css";
import { DetailsContext } from "../../../../context/DetailsContext";
import { startCombatDefaultValue } from "./combatDefaultValue";
import auth from "../../../../../../contexts/firebase/firebase";
import {
  updateCombatDetails,
  updateCombatRound,
  updateCombatTurn,
  updateCombatantListOrder,
} from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import AddCombatantDialog from "./AddCombatantDialog";
import CombatTrackerRowsDragNDrop from "./CombatTrackerRowsDragNDrop";

type CombatTrackerDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CombatTrackerDialog = ({ open, onClose }: CombatTrackerDialogProps) => {
  const { combatDetails, fetchCombatDetails } = useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();
  const [openAddCombatant, setOpenAddCombatant] = useState(false);

  const handleStartCombat = () => {
    if (!auth.currentUser?.uid) {
      return;
    }
    const newCombat = startCombatDefaultValue(
      auth.currentUser?.uid,
      auth.currentUser?.displayName as string
    );
    updateCombatDetails(id as string, newCombat);
    fetchCombatDetails();
  };

  const handleSort = () => {
    const combatants = combatDetails?.combatants;
    if (!combatants) {
      return;
    }
    const orderedCombatants = Object.entries(combatants)
      .map(([id, item]) => ({ ...item, id }))
      .sort((a, b) => b.initiative! - a.initiative!);
    updateCombatantListOrder(id as string, orderedCombatants);
    fetchCombatDetails();
  };

  const handleStart = () => {
    updateCombatRound(id as string, 1);
    fetchCombatDetails();
  };

  const handleNext = () => {
    if (!combatDetails) {
      return;
    }
    const newTurn = combatDetails.turn + 1;
    if (newTurn + 1 > Object.keys(combatDetails.combatants).length) {
      updateCombatRound(id as string, combatDetails.round + 1);
      updateCombatTurn(id as string, 0);
      fetchCombatDetails();
      return;
    }
    updateCombatTurn(id as string, newTurn);
    fetchCombatDetails();
  };

  const handlePrev = () => {
    if (!combatDetails) {
      return;
    }
    const newTurn = combatDetails.turn - 1;
    if (newTurn < 0) {
      if (combatDetails.round === 0) return;
      updateCombatRound(id as string, combatDetails.round - 1);
      updateCombatTurn(
        id as string,
        Object.keys(combatDetails.combatants).length - 1
      );
      fetchCombatDetails();
      return;
    }
    updateCombatTurn(id as string, newTurn);
    fetchCombatDetails();
  };

  if (!open) {
    return null;
  }

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
          {!combatDetails && (
            <div className="no-combat">
              <p>No combat started</p>
              <div>
                <button onClick={handleStartCombat}>Start combat</button>
              </div>
            </div>
          )}
          {combatDetails && (
            <div className="combat">
              <div className="combat-header">
                <div>
                  <h2>Combat Tracker</h2>
                  <h4>DM: {combatDetails?.dmName ?? ""}</h4>
                </div>

                {/* <button>Add characters from Inventory</button> */}
              </div>
              <div className="combat-content">
                <div className="tracker-table">
                  <div className="tracker-table-header">
                    <div
                      className="tracker-table-initiative"
                      title="Initiative"
                    >
                      Init
                    </div>
                    <span className="separator" />
                    <div className="tracker-table-name">Name</div>
                    <span className="separator" />
                    <div className="tracker-table-ac">AC</div>
                    <span className="separator" />
                    <div className="tracker-table-hp">HP</div>
                  </div>
                  <CombatTrackerRowsDragNDrop
                    combatants={combatDetails.combatants}
                  />
                </div>
                <div className="tracker-actions">
                  <div id="actions-1">
                    {combatDetails.round > 0 ? (
                      <>
                        <span
                          onClick={handlePrev}
                          className="cursor-pointer"
                        >
                          Prev
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={handleNext}
                        >
                          Next
                        </span>
                      </>
                    ) : (
                      <span
                        onClick={handleSort}
                        className="cursor-pointer"
                      >
                        Sort
                      </span>
                    )}

                    {/* <span className="separator" /> */}
                  </div>
                  <div id="actions-2">
                    {combatDetails.round === 0 ? (
                      <span
                        className="cursor-pointer"
                        onClick={handleStart}
                      >
                        Start
                      </span>
                    ) : (
                      <>
                        <span>Round {combatDetails.round}</span>
                        <span className="separator" />
                        <span className="cursor-pointer">End</span>
                      </>
                    )}
                    <span className="separator" />
                    <span
                      className="cursor-pointer"
                      onClick={() => setOpenAddCombatant(true)}
                    >
                      Add player
                    </span>
                    <span className="separator" />
                    <div className="cursor-pointer">🔄</div>
                  </div>
                </div>
                <div>notes</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <AddCombatantDialog
        open={openAddCombatant}
        onClose={() => setOpenAddCombatant(false)}
      />
    </>
  );
};

export default CombatTrackerDialog;
