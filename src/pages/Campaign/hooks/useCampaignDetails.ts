import { useEffect, useState } from "react";
import { CampaignType } from "../campaignTypes";
import {
  getCampaign,
  getCombatDetails,
} from "../../../contexts/firebase/database";

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

  const fetchCombatDetails = () => {
    if (!campaignId) return;
    getCombatDetails(campaignId).then((combat) => {
      setCampaignDetails((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          combat,
        };
      });
    });
  };

  return { campaignDetails, loading, fetchCampaignDetails, fetchCombatDetails };
};

export default useCampaignDetails;
