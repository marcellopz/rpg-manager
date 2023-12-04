import { useState } from "react";
import { InventoryContent } from "../../campaignTypes";
import { Profile } from "./components/inventory";
import BackpackItems from "./components/inventory/BackpackItems";
import "./components/inventory/inventory.css";
import AddItemDialog from "./components/inventory/AddItemDialog";

interface InventoryDetailsProps {
  content: InventoryContent;
}

export default function InventoryDetails({ content }: InventoryDetailsProps) {
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);

  const handleOpenAddItemDialog = () => {
    setAddItemDialogOpen(true);
  };

  const getCarryingWeight = () => {
    let carryingWeight = 0;
    carryingWeight += content.playerGold * 0.009;
    
    if (!content.inventory) return carryingWeight;

    Object.values(content.inventory).forEach((item) => {
      carryingWeight += item.item.weight * item.numberOfItems;
    });
    return carryingWeight;
  };

  return (
    <div className="inventory-container">
      <Profile
        character_name={content.playerName}
        character_avatar={content.playerAvatar}
        character_strength={content.playerStrength}
        character_gold={content.playerGold}
        carrying_weight={getCarryingWeight()}
      />
      <BackpackItems
        inventory={content.inventory}
        openDialog={handleOpenAddItemDialog}
      />
      <AddItemDialog
        open={addItemDialogOpen}
        onClose={() => setAddItemDialogOpen(false)}
      />
    </div>
  );
}
