import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CampaignCard from "./CampaignCard";
import "./campaign.css";
import NewCampaignDialog from "./dialogs/NewCampaignDialog";
import { AuthContext } from "../../contexts/authContext";
import { CampaignType } from "./campaignTypes";
import { getCampaign } from "../../contexts/firebase/database";
import LoadWithFlag from "../../generic-components/LoadWithFlag";

type CampaignWithId = CampaignType & { id: string };

export default function CampaignList() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { campaignIds, authUser } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState<CampaignWithId[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (authUser === null) {
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
      getCampaign(id).then((camp) => {
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
      });
    });
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [campaignIds]);

  const handleNewCampaign = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="campaign">
        <section className="campaign__header header_inset">
          <div className="campaign__backdrop">
            <h1>{t("CAMPAIGN_TITLE")}</h1>
            <div>
              <button onClick={handleNewCampaign}>{t("CAMPAIGN_NEW")}</button>
            </div>
          </div>
        </section>
        <section className="cards__section">
          <LoadWithFlag loading={loading}>
            {campaigns.length > 0 ? (
              <div className="campaign__cards">
                {campaigns.map((campaign) => (
                  <CampaignCard
                    description={campaign.description}
                    title={campaign.name}
                    imageSrc={campaign.backdropImage}
                    id={campaign.id}
                    key={campaign.id}
                  />
                ))}
              </div>
            ) : (
              <div className="no-cards">
                <p>You have no campaigns registered</p>
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
