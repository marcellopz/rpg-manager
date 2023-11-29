import { InventoryContent, TabType } from "../campaignTypes";
import InventoryDetails from "./details/InventoryDetails";
import TextDetails from "./details/TextDetails";

interface CampaignDetailsContentProps {
  tab?: TabType;
}

export default function CampaignDetailsContent({
  tab,
}: CampaignDetailsContentProps) {
  if (!tab) return null;

  console.log(tab);

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
}
