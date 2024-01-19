import { useContext, useEffect, useState } from "react";
import { CombatType, CombatantType } from "../../../../campaignTypes";
import CombatTrackerRow from "./CombatTrackerRow";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DetailsContext } from "../../../../context/DetailsContext";
import { updateCombatantListOrder } from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";

export type CombatantTypeWithID = CombatantType & { id: string };

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
                        turn={combatDetails?.turn ?? -1}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <div id="no-combatants">No combatants</div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default CombatTrackerRowsDragNDrop;
