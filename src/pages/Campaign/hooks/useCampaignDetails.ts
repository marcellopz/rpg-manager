import { useEffect, useState } from "react";
import { CampaignType } from "../campaignTypes";
import { getCampaign } from "../../../contexts/firebase/database";

const useCampaignDetails = (campaignId?: string) => {
  const [campaignDetails, setCampaignDetails] = useState<CampaignType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCampaignDetails();
  }, [campaignId]);

  const fetchCampaignDetails = async () => {
    if (!campaignId) return;
    getCampaign(campaignId).then((campaign) => {
      setCampaignDetails(campaign);
    });
    setLoading(false);
  };

  return { campaignDetails, loading, fetchCampaignDetails };
};

export default useCampaignDetails;
