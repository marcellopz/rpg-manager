import { t } from "i18next";
import { BackpackItem } from ".";
import { InventoryContent } from "../../../../campaignTypes";

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
          <img
            src="/assets/weight.png"
            alt="weight"
            width={30}
          />
        </div>
        <div className="separator" />
        <div className="total_weight">{t("BACKPACK_TOTAL")}</div>
        <div className="separator" />
        <div className="delete-item">❌</div>
      </div>
      {!!inventory ? (
        Object.entries(inventory).map(([itemId, item]) => (
          <BackpackItem
            itemId={itemId}
            item={item}
            key={itemId}
          />
        ))
      ) : (
        <h2 className="no-items">{t("BACKPACK_NO_ITEMS")}</h2>
      )}
      <div className="add-button-div">
        <button onClick={openDialog}>{t("BACKPACK_ADD_ITEM")}</button>
      </div>
    </div>
  );
}
