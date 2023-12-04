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
        <div className="item_name">Item name</div>
        <div className="separator" />
        <div className="normal_magical_consumable">Type</div>
        <div className="separator" />
        <div className="weight">
          <img
            src="/assets/weight.png"
            alt="weight"
            width={30}
          />
        </div>
        <div className="separator" />
        <div className="total_weight">Total</div>
        <div className="separator" />
        <div className="delete-item">❌</div>
      </div>
      {!!inventory ? (
        Object.entries(inventory).map(([itemId, item], i) => (
          <BackpackItem
            itemId={itemId}
            item={item}
            key={i}
          />
        ))
      ) : (
        <h2 className="no-items">No items</h2>
      )}
      <div className="add-button-div" >
        <button onClick={openDialog}>Add item</button>
      </div>
    </div>
  );
}
