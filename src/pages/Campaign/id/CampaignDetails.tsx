import { useParams } from "react-router-dom";
import campaignData, { playerMock as playerData } from "./campaignMock";
import { useState } from "react";
import CampaignDetailsContent from "./CampaignDetailsContent";
import CampaignContentSelection from "./CampaignContentSelection";

export default function CampaignDetails() {
  const { name } = useParams();
  const [category, setCategory] = useState<string>("public");
  const [tabId, setTabId] = useState<number>(0);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setTabId(0);
  };

  return (
    <main className="campaign__main h-full">
      <section className="campaign__header header_inset">
        <div className="campaign__backdrop">
          <h1>{name}</h1>
          <div>
            <button>Convidar jogador</button>
            <button>Configurações</button>
          </div>
        </div>
      </section>
      <section className="campaign__details">
        <CampaignContentSelection
          category={category}
          handleCategoryChange={handleCategoryChange}
          tabId={tabId}
          setTabId={setTabId}
          campaignData={campaignData}
          playerData={playerData}
        />
        <CampaignDetailsContent
          tab={
            category === "public"
              ? campaignData.tabs[tabId]
              : playerData.tabs[tabId]
          }
        />
      </section>
    </main>
  );
}
