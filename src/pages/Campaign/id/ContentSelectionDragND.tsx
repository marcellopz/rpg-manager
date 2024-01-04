import { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Resizable } from "react-resizable";
import {
  updateCategoryListOrder,
  updateTabListOrder,
} from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import auth from "../../../contexts/firebase/firebase";
import { DetailsContext } from "../context/DetailsContext";

type ListItem = {
  name: string;
  listIndex?: number;
};

export type ListItemWithId = ListItem & { id: string };

type ContentSelectionDragNDProps = {
  width: number;
  content:
    | {
        [key: string]: ListItem;
      }
    | undefined;
  selectedId: string;
  onItemClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
  setAddItemDialogOpen: (open: boolean) => void;
  textAddItem: string;
  type: string;
  onResize: (event: any, { size }: any) => void;
};

const ContentSelectionDragND = ({
  width,
  content,
  selectedId,
  onItemClick,
  onDeleteClick,
  setAddItemDialogOpen,
  textAddItem,
  type,
  onResize,
}: ContentSelectionDragNDProps) => {
  const [items, setItems] = useState<ListItemWithId[]>([]);
  const { id } = useParams<{ id: string }>();
  const { publicSelected, categoryId } = useContext(DetailsContext);

  useEffect(() => {
    if (!content) {
      setItems([]);
      return;
    }
    setItems(
      Object.entries(content)
        .map(([id, item]) => ({ ...item, id }))
        .sort((a, b) => a.listIndex! - b.listIndex!)
    );
  }, [content]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
    if (type === "category")
      updateCategoryListOrder(
        id as string,
        publicSelected ? "" : (auth.currentUser?.uid as string),
        reorderedItems
      );

    if (type === "tab") {
      updateTabListOrder(
        id as string,
        categoryId,
        publicSelected ? "" : (auth.currentUser?.uid as string),
        reorderedItems
      );
    }
  };

  const className = type === "tab" ? "tab-selection" : "category-selection";

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Resizable
            width={width}
            axis="x"
            minConstraints={[40, 40]}
            maxConstraints={[400, 400]}
            onResize={onResize}
          >
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ width }}
              className={`${className} item-list react-resizable`}
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      role="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={selectedId === item.id ? "tab-selected" : ""}
                      onClick={() => onItemClick(item.id)}
                      // key={item.id}
                    >
                      <p role="item-text">{item.name}</p>
                      <p
                        role="delete"
                        className="smaller-button"
                        onClick={() => onDeleteClick(item.id)}
                      >
                        🗑️
                      </p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div
                className="create-new"
                onClick={() => setAddItemDialogOpen(true)}
              >
                {textAddItem}
              </div>
            </div>
          </Resizable>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ContentSelectionDragND;
