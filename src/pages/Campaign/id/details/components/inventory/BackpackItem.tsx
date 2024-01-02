import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addItemToInventory,
  deleteItemCampaign,
  updateItemType,
  updateNameOfItem,
  updateNumberOfItems,
  updateUniqueItemWeight,
} from "../../../../../../contexts/firebase/database";
import { InventoryItemType } from "../../../../campaignTypes";
import { DetailsContext } from "../../../../context/DetailsContext";
import { t } from "i18next";
import MoreItemOptions from "./MoreItemOptions";

interface BackpackItemProps {
  item: InventoryItemType;
  itemId: string;
}

const BackpackItem = ({ item, itemId }: BackpackItemProps) => {
  const { id } = useParams<{ id: string }>();
  const { catTab, fetchAll } = useContext(DetailsContext);
  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingNumberOfItems, setEditingNumberOfItems] =
    useState<boolean>(false);
  const [numberOfItems, setNumberOfItems] = useState<number>(
    item.numberOfItems
  );
  const [name, setName] = useState<string>(item.item.name);
  const [editingType, setEditingType] = useState<boolean>(false);
  const [uniqueWeight, setUniqueWeight] = useState<string>("");
  const [editingUniqueWeight, setEditingUniqueWeight] =
    useState<boolean>(false);

  const handleDeleteItem = () => {
    deleteItemCampaign(id as string, catTab.categoryId, catTab.tabId, itemId);
    fetchAll();
  };

  const handleSendTo = (playerTabId: string) => {
    deleteItemCampaign(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      itemId
    ).then(() => {
      addItemToInventory(
        id as string,
        catTab.categoryId,
        playerTabId,
        item
      ).then(fetchAll);
    });
  };

  const handleUpdateName = () => {
    updateNameOfItem(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      itemId,
      name
    );
    setEditingName(false);
  };

  const handleUpdateNumberOfItems = () => {
    updateNumberOfItems(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      itemId,
      numberOfItems
    );
    setEditingNumberOfItems(false);
  };

  const handleUpdateWeight = () => {
    updateUniqueItemWeight(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      itemId,
      parseFloat(uniqueWeight)
    );
    setEditingUniqueWeight(false);
  };

  const handleUpdateItemType = (type: "normal" | "magic" | "consumable") => {
    updateItemType(id as string, catTab.categoryId, catTab.tabId, itemId, type);
    setEditingNumberOfItems(false);
  };

  const typeToString = (type: "normal" | "magic" | "consumable") => {
    switch (type) {
      case "normal":
        return "Normal";
      case "magic":
        return "Magic";
      case "consumable":
        return "Consu.";
    }
  };

  return (
    <div className="master_item_container">
      <div
        className="item_container"
        style={
          item.item.type === "magic"
            ? { color: "blueviolet", fontWeight: 700 }
            : item.item.type === "consumable"
            ? { color: "brown", fontWeight: 700 }
            : {}
        }
      >
        <div
          className="number_of_items"
          onDoubleClick={() => setEditingNumberOfItems(true)}
          title="Double click to edit number of items"
        >
          {editingNumberOfItems ? (
            <input
              type="number"
              value={numberOfItems}
              autoFocus
              onChange={(e) => {
                setNumberOfItems(parseInt(e.target.value));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateNumberOfItems();
                  setEditingNumberOfItems(false);
                  fetchAll();
                }
              }}
              onBlur={() => setEditingNumberOfItems(false)}
            />
          ) : (
            item.numberOfItems
          )}
        </div>
        <div
          className="item_name"
          onDoubleClick={() => setEditingName(true)}
          title="Double click to edit name"
        >
          {editingName ? (
            <>
              <input
                type="text"
                value={name}
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdateName();
                    setEditingName(false);
                    fetchAll();
                  }
                }}
                onBlur={() => setEditingName(false)}
              />
            </>
          ) : (
            <p>{item.item.name}</p>
          )}
        </div>
        <div
          className="normal_magical_consumable"
          onDoubleClick={() => setEditingType(true)}
          title="Double click to edit type"
        >
          {editingType ? (
            <select
              value={item.item.type}
              onChange={(e) => {
                handleUpdateItemType(
                  e.target.value as "normal" | "magic" | "consumable"
                );
                setEditingType(false);
                fetchAll();
              }}
            >
              <option value="normal">{t("NEW_ITEM_TYPE_NORMAL")}</option>
              <option value="magic">{t("NEW_ITEM_TYPE_MAGIC")}</option>
              <option value="consumable">
                {t("NEW_ITEM_TYPE_CONSUMABLE")}
              </option>
            </select>
          ) : (
            typeToString(item.item.type)
          )}
        </div>
        <div
          className="weight"
          onDoubleClick={() => setEditingUniqueWeight(true)}
        >
          {editingUniqueWeight ? (
            <input
              type="text"
              value={uniqueWeight}
              autoFocus
              onChange={(e) => {
                setUniqueWeight(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateWeight();
                  setEditingUniqueWeight(false);
                  fetchAll();
                }
              }}
              onBlur={() => setEditingUniqueWeight(false)}
            />
          ) : (
            item.item.weight.toFixed(1)
          )}
        </div>
        <div className="total_weight">
          {(item.item.weight * item.numberOfItems).toFixed(1)}
        </div>
        <MoreItemOptions
          deleteFunc={handleDeleteItem}
          sendToFunc={handleSendTo}
        />
      </div>
    </div>
  );
};

export default BackpackItem;
