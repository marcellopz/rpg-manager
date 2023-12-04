import React from "react";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../../../contexts/authContext";
import { DetailsContext } from "../../../../context/DetailsContext";
import { InventoryItemType } from "../../../../campaignTypes";
import { addItemToInventory } from "../../../../../../contexts/firebase/database";

type AddItemDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AddItemDialog: React.FC<AddItemDialogProps> = ({ open, onClose }) => {
  const [NumberOfItems, setNumberOfItems] = React.useState<number>(0);
  const [ItemName, setItemName] = React.useState<string>("");
  const [ItemWeight, setItemWeight] = React.useState<number>(0);
  const [ItemType, setItemType] = React.useState<
    "normal" | "magic" | "consumable"
  >("normal");
  const [error, setError] = React.useState<boolean>(false);
  const { id } = useParams();
  const { fetchAll, catTab } = React.useContext(DetailsContext);

  if (!open) {
    return null;
  }

  const addItem = () => {
    const newItem: InventoryItemType = {
      numberOfItems: NumberOfItems,
      item: {
        name: ItemName,
        type: ItemType,
        weight: ItemWeight,
      },
    };

    addItemToInventory(id as string, catTab.categoryId, catTab.tabId, newItem);

    fetchAll();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!ItemName || !ItemWeight || !ItemType) {
      setError(true);
      return;
    }
    addItem();
    setItemName("");
    setItemType("normal");
    setItemWeight(0);
    onClose();
  };

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Enter Item details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Item name*
            <input
              type="text"
              value={ItemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            {error && <p className="error">You must enter an item name</p>}
          </label>
          <div className="item-weights">
            <label>
              <p>Number of items*</p>
              <input
                type="number"
                value={NumberOfItems}
                onChange={(e) => setNumberOfItems(Number(e.target.value))}
              />
              {error && <p className="error">You must enter an item name</p>}
            </label>
            <label>
              Item weight*
              <input
                type="number"
                value={ItemWeight}
                onChange={(e) => setItemWeight(Number(e.target.value))}
              />
              {error && <p className="error">You must enter an item weight</p>}
            </label>
          </div>
          <label>
            Item type*
            <select
              onChange={(e) => {
                if (
                  e.target.value === "normal" ||
                  e.target.value === "magic" ||
                  e.target.value === "consumable"
                )
                  setItemType(e.target.value);
              }}
              value={ItemType}
            >
              <option value="normal">Normal Item</option>
              <option value="magic">Magic Item</option>
              <option value="consumable">Consumable</option>
            </select>
            {error && <p className="error">You must enter an item type</p>}
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemDialog;
