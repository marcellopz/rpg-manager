import React from "react";
import { CampaignType, PlayerType } from "../campaignTypes";
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
  resetCatTab: () => void;
}

export default function CampaignContentSelection({
  categoryId,
  handleCategoryChange,
  tabId,
  setTabId,
  selectedData,
  publicSelected,
  setPublicSelected,
  resetCatTab
}: CampaignContentSelectionProps) {
  const [hideSelection, setHideSelection] = React.useState<boolean>(false);
  const [categoryWidth, setCategoryWidth] = React.useState<number>(200);
  const [tabWidth, setTabWidth] = React.useState<number>(200);

  const handleCategoryResize = (e: React.SyntheticEvent<Element, Event>, data: ResizeCallbackData) => {
    e.stopPropagation();
    setCategoryWidth(data.size.width);
  };

  const handleTabResize = (e: React.SyntheticEvent<Element, Event>, data: ResizeCallbackData) => {
    e.stopPropagation();
    setTabWidth(data.size.width);
  };

  const handleHide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHideSelection(prev => !prev);
  };

  return (
    <div style={{ width: categoryWidth + tabWidth }} className="content-container">
      <CampaignPublicPrivateDropdown
        hideSelection={hideSelection}
        handleHide={handleHide}
        publicSelected={publicSelected}
        setPublicSelected={setPublicSelected}
        resetCatTab={resetCatTab}
      />
      <div className="content-selection" style={hideSelection ? { display: 'none', height: 0, minHeight: 0 } : {}}>
        <Resizable
          width={categoryWidth}
          axis="x"
          minConstraints={[40, 40]}
          maxConstraints={[400, 400]} onResize={handleCategoryResize}
        >
          <div style={{ width: categoryWidth }} className="category-selection item-list">
            {selectedData.categories.map((cat) => (
              <div
                className={categoryId === cat.id ? "tab-selected" : ""}
                onClick={() => handleCategoryChange(cat.id)}
                key={cat.id}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </Resizable>
        <Resizable width={tabWidth} axis="x" minConstraints={[40, 40]} maxConstraints={[400, 400]} onResize={handleTabResize}>
          <div style={{ width: tabWidth }} className="tab-selection item-list">
            {selectedData.categories.find((cat) => cat.id === categoryId)?.tabs.map((tab) => (
              <div
                className={tabId === tab.id ? "tab-selected" : ""}
                onClick={() => setTabId(tab.id)}
                key={tab.id}>
                {tab.name}
              </div>
            ))}
          </div>
        </Resizable>

      </div>
    </div>

  );
}
