import React from "react";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../../../contexts/authContext";
import { DetailsContext } from "../../../../context/DetailsContext";
import { InventoryItemType } from "../../../../campaignTypes";
import { addItemToInventory } from "../../../../../../contexts/firebase/database";
import { t } from "i18next";

type AddItemDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AddItemDialog: React.FC<AddItemDialogProps> = ({ open, onClose }) => {
  const [NumberOfItems, setNumberOfItems] = React.useState<number>(0);
  const [ItemName, setItemName] = React.useState<string>("");
  const [ItemWeight, setItemWeight] = React.useState<string>("");
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
        weight: parseFloat(ItemWeight) ?? 0,
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
    setItemWeight("");
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
        <h2>{t("NEW_ITEM_PROMPT")}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t("NEW_ITEM_LABEL")}*
            <input
              type="text"
              value={ItemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            {error && <p className="error">{t("NEW_ITEM_ERROR")}</p>}
          </label>
          <div className="item-weights">
            <label>
              <p>{t("NEW_ITEM_NUMBER_LABEL")}*</p>
              <input
                type="text"
                value={NumberOfItems}
                onChange={(e) => setNumberOfItems(Number(e.target.value))}
              />
              {error && <p className="error">{t("NEW_ITEM_NUMBER_ERROR")}</p>}
            </label>
            <label>
              {t("NEW_ITEM_WEIGHT_LABEL")}*
              <input
                type="text"
                value={ItemWeight}
                onChange={(e) => setItemWeight(e.target.value)}
              />
              {error && <p className="error">{t("NEW_ITEM_WEIGHT_ERROR")}</p>}
            </label>
          </div>
          <label>
            {t("NEW_ITEM_TYPE_LABEL")}*
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
              <option value="normal">{t("NEW_ITEM_TYPE_NORMAL")}</option>
              <option value="magic">{t("NEW_ITEM_TYPE_MAGIC")}</option>
              <option value="consumable">{t("NEW_ITEM_TYPE_MAGIC")}</option>
            </select>
          </label>
          <button type="submit">{t("ADD_BTN")}</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemDialog;
