import { useContext, useEffect, useState } from "react";
import { InventoryContent, InventoryItemType } from "../../../../campaignTypes";
import { useParams } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import BackpackItem from "./BackpackItem";
import { updateItemListOrder } from "../../../../../../contexts/firebase/database";
import { DetailsContext } from "../../../../context/DetailsContext";

export type inventoryItemWithId = InventoryItemType & { id: string };

function ItemsDragND({
  inventory,
}: {
  inventory: InventoryContent["inventory"];
}) {
  const [items, setItems] = useState<inventoryItemWithId[]>([]);
  const { id } = useParams<{ id: string }>();
  const { catTab } = useContext(DetailsContext);

  useEffect(() => {
    if (!inventory) {
      setItems([]);
      return;
    }

    setItems(
      Object.entries(inventory)
        .map(([id, item]) => ({ ...item, id }))
        .sort((a, b) => a.orderIndex! - b.orderIndex!)
    );
  }, [inventory]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
    updateItemListOrder(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      reorderedItems
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="item-list-container"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    role="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <BackpackItem
                      itemId={item.id}
                      item={item}
                      index={index}
                      key={item.id}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ItemsDragND;
