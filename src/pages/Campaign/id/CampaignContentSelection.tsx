import React from "react";
import { CampaignType, PlayerType } from "./campaignMock";
import CampaignPublicPrivateDropdown from "./CampaignPublicPrivateDropdown";
import { Resizable, ResizeCallbackData } from 'react-resizable';

interface CampaignContentSelectionProps {
  categoryId: number;
  handleCategoryChange: (category: number) => void;
  tabId: number;
  setTabId: React.Dispatch<React.SetStateAction<number>>;
  selectedData: CampaignType | PlayerType;
  publicSelected: boolean;
  setPublicSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CampaignContentSelection({
  categoryId,
  handleCategoryChange,
  tabId,
  setTabId,
  selectedData,
  publicSelected,
  setPublicSelected
}: CampaignContentSelectionProps) {
  const [categoryWidth, setCategoryWidth] = React.useState<number>(200);
  const [tabWidth, setTabWidth] = React.useState<number>(200);

  const handleCategoryResize = (_e: React.SyntheticEvent<Element, Event>, data: ResizeCallbackData) => {
    setCategoryWidth(data.size.width);
  };

  const handleTabResize = (_e: React.SyntheticEvent<Element, Event>, data: ResizeCallbackData) => {
    setTabWidth(data.size.width);
  };

  return (
    <div className="content-container">
      <CampaignPublicPrivateDropdown publicSelected={publicSelected} setPublicSelected={setPublicSelected} />
      <div className="content-selection">
        <Resizable width={categoryWidth} axis="x" minConstraints={[80, 80]} maxConstraints={[400, 400]} onResize={handleCategoryResize}>
          <div style={{ width: categoryWidth }} className="category-selection item-list">
            {selectedData.categories.map((cat) => (
              <div
                className={categoryId === cat.id ? "tab-selected" : ""}
                onClick={() => handleCategoryChange(cat.id)}
                key={cat.id}
              >
                <div>{cat.name}</div>
              </div>
            ))}
          </div>
        </Resizable>
        <Resizable width={tabWidth} axis="x" minConstraints={[80, 80]} maxConstraints={[400, 400]} onResize={handleTabResize}>
          <div style={{ width: tabWidth }} className="tab-selection item-list">
            {selectedData.categories.find((cat) => cat.id === categoryId)?.tabs.map((tab) => (
              <div
                className={tabId === tab.id ? "tab-selected" : ""}
                onClick={() => setTabId(tab.id)}
                key={tab.id}>
                <div>{tab.name}</div>
              </div>
            ))}
          </div>
        </Resizable>

      </div>
    </div>

  );
}
