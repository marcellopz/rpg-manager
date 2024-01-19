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
    loading: campaignLoading,
    fetchCampaignDetails,
    fetchCombatDetails,
    setCampaignDetails,
  } = useCampaignDetails(id);
  const {
    playerDetails,
    loading: playerLoading,
    fetchPlayerDetails,
  } = usePlayerDetails(id, authUser?.uid);

  const detailsLoading = campaignLoading || playerLoading;

  const fetchAll = () => {
    fetchCampaignDetails();
    fetchPlayerDetails();
  };

  return {
    campaignDetails,
    playerDetails,
    detailsLoading,
    fetchAll,
    fetchCombatDetails,
    setCampaignDetails,
  };
};

export default useDetails;
