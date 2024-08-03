import { useEffect, useState } from "react";
import { CampaignType, CombatType } from "../campaignTypes";
import {
  getCampaign,
  getCombatDetails,
} from "../../../contexts/firebase/database";
import { isDemo } from "../../../contexts/firebase/databaseSetup";

const useCampaignDetails = (campaignId?: string) => {
  const [campaignDetails, setCampaignDetails] = useState<CampaignType | null>(
    null
  );
  const [combatDetails, setCombatDetails] = useState<CombatType | undefined>(
    undefined
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
    if (!isDemo()) return;
    getCombatDetails(campaignId).then((combat) => {
      setCombatDetails(combat);
    });
  };

  return {
    campaignDetails,
    combatDetails,
    loading,
    fetchCampaignDetails,
    fetchCombatDetails,
    setCampaignDetails,
    setCombatDetails,
  };
};

export default useCampaignDetails;
