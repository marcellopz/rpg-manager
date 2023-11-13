import { useParams } from "react-router-dom";
import campaignData, { CampaignType, PlayerType, playerMock as playerData } from "./campaignMock";
import { useState, useEffect } from "react";
import CampaignDetailsContent from "./CampaignDetailsContent";
import CampaignContentSelection from "./CampaignContentSelection";
import { useTranslation } from "react-i18next";

export const getTabContent = (category: number, tabId: number, data: CampaignType | PlayerType) => {
  return data.categories[category].tabs[tabId].content;
}

export default function CampaignDetails() {
  const { t } = useTranslation()
  const { name } = useParams();
  const [publicSelected, setPublicSelected] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [tabId, setTabId] = useState<number>(0);
  const [selectedData, setSelectedData] = useState<CampaignType | PlayerType>(campaignData);

  useEffect(() => {
    if (publicSelected) {
      setSelectedData(campaignData);
    } else {
      setSelectedData(playerData);
    }
  }, [publicSelected]);

  const handleCategoryChange = (catId: number) => {
    setCategoryId(catId);
    setTabId(0);
  };

  return (
    <main className="campaign__main h-full">
      <section className="campaign__header header_inset">
        <div className="campaign__backdrop">
          <h1>{name}</h1>
          <div>
            <button>{t('CAMPAIGN_INVITE_PLAYER')}</button>
            <button>{t('CAMPAIGN_CONFIG')}</button>
          </div>
        </div>
      </section>
      <section className="campaign__details">
        <CampaignContentSelection
          categoryId={categoryId}
          handleCategoryChange={handleCategoryChange}
          tabId={tabId}
          setTabId={setTabId}
          selectedData={selectedData}
          // campaignData={campaignData}
          // playerData={playerData}
          publicSelected={publicSelected}
          setPublicSelected={setPublicSelected}
        />
        <CampaignDetailsContent
          content={
            publicSelected ?
              getTabContent(categoryId, tabId, campaignData) :
              getTabContent(categoryId, tabId, playerData)
          }
        />
      </section>
    </main>
  );
}
