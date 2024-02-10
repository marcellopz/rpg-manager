import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { useTranslation } from "react-i18next";
import { DetailsContext } from "../context/DetailsContext";
import CombatTrackerDialog from "./details/components/cambat-tracker/CombatTrackerDialog";
import { getImage } from "../../../contexts/firebase/storage";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

type CampaignDetailsHeaderProps = {
  setInvitePlayerDialogOpen: (open: boolean) => void;
  setEditCampaignDialogOpen: (open: boolean) => void;
};

const CampaignDetailsHeader = ({
  setInvitePlayerDialogOpen,
  setEditCampaignDialogOpen,
}: CampaignDetailsHeaderProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { authUser } = useContext(AuthContext);
  const { campaignDetails } = useContext(DetailsContext);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getImage(`campaign/backdropImage/${id}`).then((res) => {
      const blob = new Blob([res], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      const header = document.getElementById(
        `campaign__header`
      ) as HTMLDivElement;
      header.style.backgroundImage = `url(${url})`;
    });
  }, []);

  return (
    <section
      className="campaign__header header_inset"
      id="campaign__header"
    >
      <div className="campaign__backdrop">
        {window.location.pathname.startsWith("/demo-campaign") && (
          <div id="demo-warning">
            <div>{t("CAMPAIGN_DEMO_WARNING")}</div>
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {campaignDetails?.name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => setOpen(true)}>
            {t("COMBAT_TRACKER_TITLE")}
          </button>
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
        </motion.div>
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
