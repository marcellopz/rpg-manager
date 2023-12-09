import { InventoryContent, TabType } from "../campaignTypes";
import CharacterSheet from "./details/CharacterSheet";
import CombatControl from "./details/CombatControl";
import InventoryDetails from "./details/InventoryDetails";
import ResourcesControl from "./details/ResourcesControl";
import TextDetails from "./details/TextDetails";

interface CampaignDetailsContentProps {
  tab?: TabType;
}

export default function CampaignDetailsContent({
  tab,
}: CampaignDetailsContentProps) {
  if (!tab) return null;

  if (tab.type === "text") {
    return (
      <div className="tab-content">
        <TextDetails content={(tab.content || "") as string} />
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

  if (tab.type === "combat") {
    return (
      <div className="tab-content">
        <CombatControl />
      </div>
    );
  }

  if (tab.type === "sheet") {
    return (
      <div className="tab-content">
        <CharacterSheet />
      </div>
    );
  }

  if (tab.type === "resource") {
    return (
      <div className="tab-content">
        <ResourcesControl />
      </div>
    );
  }
}
