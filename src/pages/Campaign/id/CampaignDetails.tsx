import { useParams } from "react-router-dom";
// import campaignData, { playerMock as playerData } from "./campaignMock";
import { CampaignType, PlayerType } from "../campaignTypes";
import { useState, useContext } from "react";
import CampaignDetailsContent from "./CampaignDetailsContent";
import CampaignContentSelection from "./CampaignContentSelection";
import { useTranslation } from "react-i18next";
import InvitePlayerDialog from "../dialogs/InvitePlayerDialog";
import LoadWithFlag from "../../../generic-components/LoadWithFlag";
import { DetailsContext } from "../context/DetailsContext";

export const getTab = (
  category: string,
  tabId: string,
  data: CampaignType | PlayerType
) => {
  return data?.categories?.[category]?.tabs?.[tabId];
};

export default function CampaignDetails() {
  const { t } = useTranslation();
  const { id, name } = useParams();
  const {
    campaignDetails,
    playerDetails,
    loading,
    setCatTab,
    categoryId,
    tabId,
    publicSelected,
  } = useContext(DetailsContext);

  const [invitePlayerDialogOpen, setInvitePlayerDialogOpen] =
    useState<boolean>(false);

  const handleCategoryChange = (catId: string) => {
    setCatTab({
      categoryId: catId,
      tabId: "",
    });
  };

  const resetCatTab = () => {
    setCatTab({
      categoryId: "",
      tabId: "",
    });
  };

  return (
    <>
      <main className="campaign__main h-full">
        <section
          className="campaign__header header_inset"
          style={
            campaignDetails?.backdropImage
              ? { backgroundImage: `url(${campaignDetails?.backdropImage})` }
              : {}
          }
        >
          <div className="campaign__backdrop">
            <h1>{name}</h1>
            <div>
              <button
                onClick={() => {
                  setInvitePlayerDialogOpen(true);
                }}
              >
                {t("CAMPAIGN_INVITE_PLAYER")}
              </button>
              <button>{t("CAMPAIGN_CONFIG")}</button>
            </div>
          </div>
        </section>
        <section className="campaign__details">
          <LoadWithFlag loading={loading}>
            <CampaignContentSelection
              handleCategoryChange={handleCategoryChange}
              resetCatTab={resetCatTab}
            />
            <CampaignDetailsContent
              tab={
                publicSelected
                  ? getTab(categoryId, tabId, campaignDetails as CampaignType)
                  : getTab(categoryId, tabId, playerDetails as PlayerType)
              }
            />
          </LoadWithFlag>
        </section>
      </main>
      <InvitePlayerDialog
        campaignName={name as string}
        campaignId={id as string}
        open={invitePlayerDialogOpen}
        onClose={() => setInvitePlayerDialogOpen(false)}
      />
    </>
  );
}
