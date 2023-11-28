import React, { createContext } from "react";
import { CampaignType, PlayerType } from "../campaignTypes";
import useDetails from "../hooks/useDetails";

interface DetailsContextProps {
  campaignDetails: CampaignType | null;
  playerDetails: PlayerType | null;
  loading: boolean;
  fetchAll: () => void;
}

interface DetailsProviderProps {
  children: React.ReactNode;
}

export const DetailsContext = createContext<DetailsContextProps>({
  campaignDetails: null,
  playerDetails: null,
  loading: true,
  fetchAll: () => {},
});

const DetailsProvider: React.FC<DetailsProviderProps> = ({ children }) => {
  const { campaignDetails, playerDetails, detailsLoading, fetchAll } =
    useDetails();

  return (
    <DetailsContext.Provider
      value={{
        campaignDetails,
        playerDetails,
        loading: detailsLoading,
        fetchAll,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
