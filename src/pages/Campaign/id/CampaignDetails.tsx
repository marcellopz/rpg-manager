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
import { AuthContext } from "../../../contexts/authContext";
import CampaignConfigsDialog from "../dialogs/CampaignConfigsDialog";

export const getTab = (
  category: string,
  tabId: string,
  data: CampaignType | PlayerType
) => {
  return data?.categories?.[category]?.tabs?.[tabId];
};

export default function CampaignDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const {
    campaignDetails,
    playerDetails,
    loading,
    setCatTab,
    categoryId,
    tabId,
    publicSelected,
  } = useContext(DetailsContext);
  const { authUser } = useContext(AuthContext);

  const [invitePlayerDialogOpen, setInvitePlayerDialogOpen] =
    useState<boolean>(false);

  const [editCampaignDialogOpen, setEditCampaignDialogOpen] =
    useState<boolean>(false);

  const handleCategoryChange = (catId: string) => {

    let firstTab = "";
    if (campaignDetails?.categories?.[catId].tabs) {
      firstTab = Object.keys(
        campaignDetails?.categories[catId].tabs as {
          [key: string]: any;
        }
      )[0];
    }
    setCatTab({
      categoryId: catId,
      tabId: firstTab,
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
            <h1>{campaignDetails?.name}</h1>
            {authUser?.uid === campaignDetails?.creatorId && (
              <div>
                <button
                  onClick={() => {
                    setInvitePlayerDialogOpen(true);
                  }}
                >
                  {t("CAMPAIGN_INVITE_PLAYER")}
                </button>
                <button
                  onClick={() => {
                    setEditCampaignDialogOpen(true);
                  }}
                >
                  {t("CAMPAIGN_CONFIG")}
                </button>
              </div>
            )}
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
        campaignName={campaignDetails?.name as string}
        campaignId={id as string}
        open={invitePlayerDialogOpen}
        onClose={() => setInvitePlayerDialogOpen(false)}
      />
      <CampaignConfigsDialog
        open={editCampaignDialogOpen}
        onClose={() => setEditCampaignDialogOpen(false)}
      />
    </>
  );
}
