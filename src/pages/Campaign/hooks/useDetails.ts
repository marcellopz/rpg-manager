import { useContext } from "react";
import { useParams } from "react-router-dom";
4;
import useCampaignDetails from "./useCampaignDetails";
import { AuthContext } from "../../../contexts/authContext";
import usePlayerDetails from "./usePlayerDetails";

const useDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { authUser } = useContext(AuthContext);
  const {
    campaignDetails,
    combatDetails,
    loading: campaignLoading,
    fetchCampaignDetails,
    fetchCombatDetails,
    setCampaignDetails,
    setCombatDetails,
  } = useCampaignDetails(id);
  const {
    playerDetails,
    loading: playerLoading,
    fetchPlayerDetails,
  } = usePlayerDetails(id, authUser?.uid ?? "guest");

  const detailsLoading = campaignLoading || playerLoading;

  const fetchAll = () => {
    fetchCampaignDetails();
    fetchPlayerDetails();
  };

  return {
    combatDetails,
    campaignDetails,
    playerDetails,
    detailsLoading,
    fetchAll,
    fetchCombatDetails,
    setCampaignDetails,
    setCombatDetails,
  };
};

export default useDetails;
