import { t } from "i18next";
import { InventoryContent } from "../../../../campaignTypes";
import ItemsDragND from "./ItemsDragND";

export default function BackpackItems({
  inventory,
  openDialog,
}: {
  inventory: InventoryContent["inventory"];
  openDialog: () => void;
}) {
  return (
    <div className="items-section">
      <div className="items-header inventory-background">
        <div className="number_of_items">#</div>
        <div className="separator" />
        <div className="item_name">{t("NEW_ITEM_LABEL")}</div>
        <div className="separator" />
        <div className="normal_magical_consumable">{t("BACKPACK_TYPE")}</div>
        <div className="separator" />
        <div className="weight">
          <img src="/assets/weight.png" alt="weight" width={30} />
        </div>
        <div className="separator" />
        <div className="total_weight">{t("BACKPACK_TOTAL")}</div>
        <div className="separator" />
        <div className="delete-item">
          <img src="/assets/three-dots.png" alt="more" height={18} />
        </div>
      </div>
      {!!inventory ? (
        <ItemsDragND inventory={inventory} />
      ) : (
        // Object.entries(inventory).map(([itemId, item], index) => (
        //   <BackpackItem
        //     itemId={itemId}
        //     item={item}
        //     key={itemId}
        //     index={index}
        //   />
        // ))
        <h2 className="no-items">{t("BACKPACK_NO_ITEMS")}</h2>
      )}
      <div className="add-button-div">
        <button onClick={openDialog}>{t("BACKPACK_ADD_ITEM")}</button>
      </div>
    </div>
  );
}
