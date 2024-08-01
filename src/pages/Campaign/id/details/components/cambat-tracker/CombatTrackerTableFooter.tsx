import { useContext } from "react";
import { DetailsContext } from "../../../../context/DetailsContext";
import {
  updateCombatRound,
  updateCombatTurn,
  updateCombatant,
  updateCombatantCondition,
  updateCombatantListOrder,
} from "../../../../../../contexts/firebase/database";
import { CombatantTypeWithID } from "./CombatTrackerRowsDragNDrop";
import { useParams } from "react-router-dom";
import { t } from "i18next";

function CombatTrackerTableFooter({
  setOpenConfirmEndCombat,
  setOpenAddCombatant,
}: {
  setOpenConfirmEndCombat: (value: boolean) => void;
  setOpenAddCombatant: (value: boolean) => void;
}) {
  const { id } = useParams<{ id: string }>();
  const { combatDetails, fetchCombatDetails, isCombatDm } =
    useContext(DetailsContext);

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

  const updateConditions = () => {
    if (!combatDetails || !combatDetails.combatants) return;

    const arrIdPlayer = Object.entries(combatDetails.combatants).find(
      ([_i, c]) => c.orderIndex === combatDetails.turn
    );

    if (!arrIdPlayer) return;

    const playerInTurn: CombatantTypeWithID = {
      id: arrIdPlayer[0],
      ...arrIdPlayer[1],
    };

    if (playerInTurn?.activeEffects) {
      Object.entries(playerInTurn.activeEffects).forEach(
        ([effectId, effect]) => {
          if (effect.duration === -1) {
            return;
          }
          if (effect.duration === 1) {
            updateCombatantCondition(
              id as string,
              playerInTurn.id,
              effectId,
              null
            );
            return;
          }
          updateCombatantCondition(id as string, playerInTurn.id, effectId, {
            ...effect,
            duration: effect.duration - 1,
          });
        }
      );
    }
  };

  const updateReaction = (newTurnValue: number) => {
    if (!combatDetails || !combatDetails.combatants) return;

    const arrIdNextPlayer = Object.entries(combatDetails.combatants).find(
      ([_i, c]) => c.orderIndex === newTurnValue
    );

    if (!arrIdNextPlayer) return;
    updateCombatant(id as string, arrIdNextPlayer[0], {
      ...arrIdNextPlayer[1],
      usedReaction: false,
    });
  };

  const handleNext = () => {
    if (!combatDetails || !combatDetails.combatants) {
      return;
    }

    updateConditions();

    const newTurn = combatDetails.turn + 1;
    if (newTurn + 1 > Object.keys(combatDetails.combatants).length) {
      updateCombatRound(id as string, combatDetails.round + 1);
      updateCombatTurn(id as string, 0);
      fetchCombatDetails();
      updateReaction(0);
      return;
    }
    updateCombatTurn(id as string, newTurn);
    updateReaction(newTurn);
    fetchCombatDetails();
  };

  const handlePrev = () => {
    if (!combatDetails || !combatDetails.combatants) {
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

  if (!combatDetails) return null;

  return (
    <div className="tracker-actions">
      {isCombatDm ? (
        <div id="actions-1">
          {combatDetails.round > 0 && (
            <>
              <span onClick={handlePrev} className="cursor-pointer">
                {t("PREV")}
              </span>
              <span className="cursor-pointer" onClick={handleNext}>
                {t("NEXT")}
              </span>
            </>
          )}
          <span onClick={handleSort} className="cursor-pointer">
            {t("SORT")}
          </span>
        </div>
      ) : (
        <div />
      )}
      {isCombatDm ? (
        <div id="actions-2">
          {combatDetails.round === 0 ? (
            <span className="cursor-pointer" onClick={handleStart}>
              {t("START")}
            </span>
          ) : (
            <>
              <span>
                {t("ROUND")} {combatDetails.round}
              </span>
              <span className="separator" />
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpenConfirmEndCombat(true);
                }}
              >
                {t("END")}
              </span>
            </>
          )}
          <span className="separator" />
          <span
            className="cursor-pointer"
            onClick={() => setOpenAddCombatant(true)}
          >
            {t("COMBAT_ADD_COMBATANT")}
          </span>
        </div>
      ) : (
        <span>
          {t("ROUND")} {combatDetails.round}
        </span>
      )}
    </div>
  );
}

export default CombatTrackerTableFooter;
