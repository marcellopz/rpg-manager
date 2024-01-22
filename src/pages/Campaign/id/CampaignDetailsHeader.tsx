import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { useTranslation } from "react-i18next";
import { DetailsContext } from "../context/DetailsContext";
import CombatTrackerDialog from "./details/components/cambat-tracker/CombatTrackerDialog";

type CampaignDetailsHeaderProps = {
  setInvitePlayerDialogOpen: (open: boolean) => void;
  setEditCampaignDialogOpen: (open: boolean) => void;
};

const CampaignDetailsHeader = ({
  setInvitePlayerDialogOpen,
  setEditCampaignDialogOpen,
}: CampaignDetailsHeaderProps) => {
  const { t } = useTranslation();
  const { authUser } = useContext(AuthContext);
  const { campaignDetails } = useContext(DetailsContext);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section
      className="campaign__header header_inset"
      style={
        campaignDetails?.backdropImage
          ? { backgroundImage: `url(${campaignDetails?.backdropImage})` }
          : {}
      }
    >
      <div className="campaign__backdrop">
        {window.location.pathname.startsWith("/demo-campaign") && (
          <div id="demo-warning">
            <div>Changes made here will not persist</div>
          </div>
        )}
        <h1>{campaignDetails?.name}</h1>
        <div>
          <button onClick={() => setOpen(true)}>Combat Tracker</button>
          {authUser?.uid === campaignDetails?.creatorId && (
            <>
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
            </>
          )}
        </div>
      </div>
      <CombatTrackerDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </section>
  );
};

export default CampaignDetailsHeader;
