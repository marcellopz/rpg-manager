import { useParams } from "react-router-dom";
import { CampaignType, PlayerType } from "../campaignTypes";
import { useState, useContext } from "react";
import CampaignDetailsContent from "./CampaignDetailsContent";
import CampaignContentSelection from "./CampaignContentSelection";
import InvitePlayerDialog from "../dialogs/InvitePlayerDialog";
import LoadWithFlag from "../../../generic-components/LoadWithFlag";
import { DetailsContext } from "../context/DetailsContext";
import CampaignConfigsDialog from "../dialogs/CampaignConfigsDialog";
import CampaignDetailsHeader from "./CampaignDetailsHeader";
import allCampaignsMocks from "../../../contexts/firebase/campaignMock";

export const getTab = (
  category: string,
  tabId: string,
  data: CampaignType | PlayerType
) => {
  return data?.categories?.[category]?.tabs?.[tabId];
};

export default function CampaignDetails() {
  const { id } = useParams();
  const {
    campaignDetails,
    playerDetails,
    loading,
    setCatTab,
    categoryId,
    tabId,
    publicSelected,
    canTabChange,
    selectedData,
  } = useContext(DetailsContext);

  const [invitePlayerDialogOpen, setInvitePlayerDialogOpen] =
    useState<boolean>(false);

  const [editCampaignDialogOpen, setEditCampaignDialogOpen] =
    useState<boolean>(false);

  const handleCategoryChange = (catId: string) => {
    if (!canTabChange) return;

    let firstTab = "";
    if (selectedData?.categories?.[catId].tabs) {
      firstTab =
        Object.entries(
          selectedData.categories[catId].tabs as {
            [key: string]: any;
          }
        ).find(([_, ta]) => ta.listIndex === 0)?.[0] ||
        Object.keys(
          selectedData.categories[catId].tabs as {
            [key: string]: any;
          }
        )[0] ||
        "";
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
        <CampaignDetailsHeader
          setInvitePlayerDialogOpen={setInvitePlayerDialogOpen}
          setEditCampaignDialogOpen={setEditCampaignDialogOpen}
        />
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
