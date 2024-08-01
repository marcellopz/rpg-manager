import { useContext, useEffect, useState } from "react";
import { CombatType, CombatantType } from "../../../../campaignTypes";
import CombatTrackerRow from "./CombatTrackerRow";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DetailsContext } from "../../../../context/DetailsContext";
import { updateCombatantListOrder } from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { t } from "i18next";

export type CombatantTypeWithID = CombatantType & { id: string };

const getTurnRecursive = (
  turn: number,
  combatants: CombatantType[]
): number => {
  const nextTurn = combatants.find((c) => c.orderIndex === turn);
  if (typeof nextTurn === "undefined") {
    return -1;
  }
  if (nextTurn.visible === false) {
    if (turn === 0) {
      return getTurnRecursive(combatants.length - 1, combatants);
    }
    return getTurnRecursive(turn - 1, combatants);
  }
  return turn;
};

const getTurn = (
  combatDetails: CombatType | undefined,
  isCombatDm: boolean
) => {
  if (combatDetails?.turn !== 0 && !combatDetails?.turn) return -1;
  if (isCombatDm) return combatDetails.turn;
  if (!combatDetails?.combatants) return -1;
  const combatants = Object.values(combatDetails.combatants);
  return getTurnRecursive(combatDetails.turn, combatants);
};

function CombatTrackerRowsDragNDrop({
  combatants,
}: {
  combatants: CombatType["combatants"];
}) {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<CombatantTypeWithID[]>([]);
  const { isCombatDm, combatDetails, fetchCombatDetails } =
    useContext(DetailsContext);
  const [someDialogOpen, setSomeDialogOpen] = useState(false);

  useEffect(() => {
    if (!combatants) {
      setItems([]);
      return;
    }

    setItems(
      Object.entries(combatants)
        .map(([id, item]) => ({ ...item, id }))
        .sort((a, b) => a.orderIndex! - b.orderIndex!)
    );
  }, [combatants]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
    updateCombatantListOrder(id as string, reorderedItems);
    fetchCombatDetails();
  };

  const turn = getTurn(combatDetails, isCombatDm);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="tracker-table-body"
          >
            {items.length ? (
              items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={!isCombatDm || someDialogOpen}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CombatTrackerRow
                        setSomeDialogOpen={setSomeDialogOpen}
                        combatant={item}
                        turn={turn}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <div id="no-combatants">{t("COMBAT_NO_COMBATANTS")}</div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default CombatTrackerRowsDragNDrop;
