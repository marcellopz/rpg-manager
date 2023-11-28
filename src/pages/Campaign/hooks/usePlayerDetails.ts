import { useEffect, useState } from "react";
import { PlayerType } from "../campaignTypes";
import { getPlayerCampaign } from "../../../contexts/firebase/database";

const usePlayerDetails = (campaignId?: string, playerId?: string) => {
  const [playerDetails, setPlayerDetails] = useState<PlayerType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPlayerDetails();
  }, [campaignId, playerId]);

  const fetchPlayerDetails = async () => {
    setLoading(true);
    if (!campaignId || !playerId) return;
    getPlayerCampaign(campaignId, playerId).then((player) => {
      setPlayerDetails(player);
    });
    setLoading(false);
  };

  return { playerDetails, loading, fetchPlayerDetails };
};

export default usePlayerDetails;
