import { InventoryContent, TabType } from "../campaignTypes";
import CharacterSheet from "./details/CharacterSheet";
import InventoryDetails from "./details/InventoryDetails";
import TextDetails from "./details/TextDetails";
import { CharSheetType } from "./details/components/character-sheet/CharSheetType";

interface CampaignDetailsContentProps {
  tab?: TabType;
}

export default function CampaignDetailsContent({
  tab,
}: CampaignDetailsContentProps) {
  if (!tab) {
    document.title = "RPG Manager";
    return null;
  }

  document.title = `RPG - ${tab.name}`;

  if (tab.type === "text") {
    return (
      <div className="tab-content">
        <TextDetails />
      </div>
    );
  }

  if (tab.type === "inventory") {
    return (
      <div className="tab-content">
        <InventoryDetails content={(tab.content || "") as InventoryContent} />
      </div>
    );
  }

  if (tab.type === "sheet") {
    return (
      <div className="tab-content">
        <CharacterSheet content={tab.content as CharSheetType} />
      </div>
    );
  }
}
