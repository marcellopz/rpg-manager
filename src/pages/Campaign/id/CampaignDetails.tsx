import { useParams } from "react-router-dom";
// import campaignData, { playerMock as playerData } from "./campaignMock";
import { CampaignType, PlayerType } from "../campaignTypes";
import { useState, useEffect, useContext } from "react";
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
  const { campaignDetails, playerDetails, loading } =
    useContext(DetailsContext);

  const [selectedData, setSelectedData] = useState<
    CampaignType | PlayerType | null
  >(null);

  const [publicSelected, setPublicSelected] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<string>("");
  const [tabId, setTabId] = useState<string>("");
  const [invitePlayerDialogOpen, setInvitePlayerDialogOpen] =
    useState<boolean>(false);

  const resetTabIdsCampaign = () => {
    if (!campaignDetails?.categories) return;
    let firstTab = "";
    const firstCategory = Object.keys(campaignDetails.categories)[0];
    if (campaignDetails.categories[firstCategory].tabs) {
      firstTab = Object.keys(
        campaignDetails.categories[firstCategory].tabs as {
          [key: string]: any;
        }
      )[0];
    }
    setCategoryId(firstCategory ?? "");
    setTabId(firstTab);
  };

  const resetTabIdsPlayer = () => {
    if (!playerDetails?.categories) return;
    let firstTab = "";
    const firstCategory = Object.keys(playerDetails.categories)[0];
    if (playerDetails.categories[firstCategory].tabs) {
      firstTab = Object.keys(
        playerDetails.categories[firstCategory].tabs as {
          [key: string]: any;
        }
      )[0];
    }
    setCategoryId(firstCategory ?? "");
    setTabId(firstTab);
  };

  const resetIds = () => {
    if (publicSelected) {
      resetTabIdsCampaign();
    } else {
      resetTabIdsPlayer();
    }
  };

  useEffect(() => {
    resetIds();
  }, [publicSelected]);

  useEffect(() => {
    if (categoryId === "" && tabId === "" && campaignDetails?.categories) {
      resetIds();
    }
  }, [campaignDetails, playerDetails]);

  useEffect(() => {
    if (publicSelected) {
      setSelectedData(campaignDetails);
    } else {
      setSelectedData(playerDetails);
    }
  }, [publicSelected, campaignDetails, playerDetails]);

  const handleCategoryChange = (catId: string) => {
    setCategoryId(catId);
    setTabId("");
  };

  const resetCatTab = () => {
    setCategoryId("");
    setTabId("");
  };

  const handleOpenInvite = () => {
    setInvitePlayerDialogOpen(true);
  };

  if (
    selectedData?.categories &&
    selectedData?.categories?.[categoryId]?.tabs &&
    (!(categoryId in selectedData?.categories) ||
      //@ts-ignore
      !(tabId in selectedData?.categories?.[categoryId]?.tabs ?? {}))
  ) {
    resetIds();
  }

  return (
    <>
      <main className="campaign__main h-full">
        <section className="campaign__header header_inset">
          <div className="campaign__backdrop">
            <h1>{name}</h1>
            <div>
              <button onClick={handleOpenInvite}>
                {t("CAMPAIGN_INVITE_PLAYER")}
              </button>
              <button>{t("CAMPAIGN_CONFIG")}</button>
            </div>
          </div>
        </section>
        <section className="campaign__details">
          <LoadWithFlag loading={loading}>
            <CampaignContentSelection
              categoryId={categoryId}
              handleCategoryChange={handleCategoryChange}
              tabId={tabId}
              setTabId={setTabId}
              selectedData={selectedData}
              publicSelected={publicSelected}
              setPublicSelected={setPublicSelected}
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
        campaignId={id}
        open={invitePlayerDialogOpen}
        onClose={() => setInvitePlayerDialogOpen(false)}
      />
    </>
  );
}
