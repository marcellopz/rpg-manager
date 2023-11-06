import React from "react";
import { CampaignType, PlayerType } from "./campaignMock";

interface CampaignContentSelectionProps {
  category: string;
  handleCategoryChange: (category: string) => void;
  tabId: number;
  setTabId: React.Dispatch<React.SetStateAction<number>>;
  campaignData: CampaignType;
  playerData: PlayerType;
}

export default function CampaignContentSelection({
  category,
  handleCategoryChange,
  tabId,
  setTabId,
  campaignData,
  playerData,
}: CampaignContentSelectionProps) {
  return (
    <div className="content-selection">
      <div className="category-selection item-list">
        <div
          className={category === "public" ? "tab-selected" : ""}
          onClick={() => handleCategoryChange("public")}
        >
          Public section
        </div>
        <div
          className={category === "private" ? "tab-selected" : ""}
          onClick={() => {
            handleCategoryChange("private");
          }}
        >
          Private section
        </div>
      </div>
      <div className="tab-selection item-list">
        {category === "public" &&
          campaignData.tabs.map((tab) => (
            <div
              className={tabId === tab.id ? "tab-selected" : ""}
              onClick={() => setTabId(tab.id)}
              key={tab.id}
            >
              <div>{tab.name}</div>
            </div>
          ))}
        {category === "private" &&
          playerData.tabs.map((tab) => (
            <div
              className={tabId === tab.id ? "tab-selected" : ""}
              onClick={() => setTabId(tab.id)}
              key={tab.id}
            >
              <div>{tab.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
