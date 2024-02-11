import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CampaignCard from "./CampaignCard";
import "./campaign.css";
import NewCampaignDialog from "./dialogs/NewCampaignDialog";
import { AuthContext } from "../../contexts/authContext";
import { CampaignType } from "./campaignTypes";
import { getCampaign } from "../../contexts/firebase/database";
import LoadWithFlag from "../../generic-components/LoadWithFlag";
import { backgroundImage } from "../../contexts/firebase/characterImages";
import { motion } from "framer-motion";

type CampaignWithId = CampaignType & { id: string };

export default function CampaignList() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { campaignIds, authUser, authLoading } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState<CampaignWithId[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (authUser === null && authLoading === false) {
      setLoading(false);
      return;
    }
    if (campaignIds === null) return;
    if (campaignIds.length === 0) {
      setLoading(false);
      return;
    }
    if (campaigns.length !== 0) return;
    campaignIds.forEach((id) => {
      getCampaign(id)
        .then((camp) => {
          setCampaigns((prevCampaigns) => [
            ...prevCampaigns,
            {
              name: camp.name,
              description: camp.description,
              backdropImage: camp.backdropImage,
              creatorId: camp.creatorId,
              id,
            },
          ]);
        })
        .then(() => {
          setLoading(false);
        });
    });
  }, [campaignIds]);

  const handleNewCampaign = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="campaign">
        <motion.section
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="campaign__header header_inset"
        >
          <div className="campaign__backdrop">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              id="campaigns"
            >
              {t("CAMPAIGN_TITLE")}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button onClick={handleNewCampaign}>{t("CAMPAIGN_NEW")}</button>
            </motion.div>
          </div>
        </motion.section>
        <section className="cards__section">
          <div className="campaign__cards">
            <CampaignCard
              description={
                "Demo campaign used for showcasing, edits made here will not be saved."
              }
              title={"Demo Campaign"}
              imageSrc={`data:image/png;base64,${backgroundImage}`}
              id={"1"}
              isDemo
            />
          </div>
          <LoadWithFlag loading={loading}>
            {campaigns.length > 0 ? (
              <div className="campaign__cards">
                {campaigns.map((campaign) => (
                  <CampaignCard
                    description={campaign.description}
                    title={campaign.name}
                    imageSrc={campaign.campaignCardImage}
                    id={campaign.id}
                    key={campaign.id}
                  />
                ))}
              </div>
            ) : (
              <div className="no-cards">
                <p>{t("NO_CAMPAIGNS_REGISTERED")}</p>
                <button onClick={handleNewCampaign}>{t("CAMPAIGN_NEW")}</button>
              </div>
            )}
          </LoadWithFlag>
        </section>
      </div>
      <NewCampaignDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
