import React, { createContext } from "react";
import { CampaignType, PlayerType } from "../campaignTypes";
import useDetails from "../hooks/useDetails";

interface DetailsContextProps {
  campaignDetails: CampaignType | null;
  playerDetails: PlayerType | null;
  loading: boolean;
  fetchAll: () => void;
  catTab: { categoryId: string; tabId: string };
  setCatTab: (catTab: { categoryId: string; tabId: string }) => void;
  tabId: string;
  setTabId: (id: string) => void;
  categoryId: string;
  setCategoryId: (id: string) => void;
  resetIds: () => void;
  selectedData: CampaignType | PlayerType | null;
  setSelectedData: React.Dispatch<
    React.SetStateAction<CampaignType | PlayerType | null>
  >;
  publicSelected: boolean;
  setPublicSelected: React.Dispatch<React.SetStateAction<boolean>>;
  needSaveDialogOpen: boolean;
  setNeedSaveDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  canTabChange: boolean;
  setCanTabChange: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DetailsProviderProps {
  children: React.ReactNode;
}

export const DetailsContext = createContext<DetailsContextProps>({
  campaignDetails: null,
  playerDetails: null,
  loading: true,
  fetchAll: () => {},
  catTab: { categoryId: "", tabId: "" },
  setCatTab: () => {},
  tabId: "",
  setTabId: () => {},
  categoryId: "",
  setCategoryId: () => {},
  resetIds: () => {},
  selectedData: null,
  setSelectedData: () => {},
  publicSelected: true,
  setPublicSelected: () => {},
  needSaveDialogOpen: false,
  setNeedSaveDialogOpen: () => {},
  canTabChange: true,
  setCanTabChange: () => {},
});

const DetailsProvider: React.FC<DetailsProviderProps> = ({ children }) => {
  const { campaignDetails, playerDetails, detailsLoading, fetchAll } =
    useDetails();
  const [catTab, setCatTab] = React.useState<{
    categoryId: string;
    tabId: string;
  }>({ categoryId: "", tabId: "" });
  const [selectedData, setSelectedData] = React.useState<
    CampaignType | PlayerType | null
  >(null);
  const [publicSelected, setPublicSelected] = React.useState<boolean>(true);
  const [needSaveDialogOpen, setNeedSaveDialogOpen] =
    React.useState<boolean>(false);
  const [canTabChange, setCanTabChange] = React.useState<boolean>(true);

  React.useEffect(() => {
    resetIds();
  }, [publicSelected]);

  React.useEffect(() => {
    if (
      catTab.categoryId === "" &&
      catTab.tabId === "" &&
      campaignDetails?.categories
    ) {
      resetIds();
    }
  }, [campaignDetails, playerDetails]);

  React.useEffect(() => {
    if (publicSelected) {
      setSelectedData(campaignDetails);
    } else {
      setSelectedData(playerDetails);
    }
  }, [publicSelected, campaignDetails, playerDetails]);

  const resetCatTabIds = (obj: CampaignType | PlayerType | null) => {
    if (!obj?.categories) return;
    let firstTab = "";
    const firstCategory = Object.keys(obj.categories)[0];
    if (obj.categories[firstCategory].tabs) {
      firstTab = Object.keys(
        obj.categories[firstCategory].tabs as {
          [key: string]: any;
        }
      )[0];
    }
    setCatTab({ categoryId: firstCategory ?? "", tabId: firstTab });
  };

  const resetIds = () => {
    if (publicSelected) {
      resetCatTabIds(campaignDetails);
    } else {
      resetCatTabIds(playerDetails);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        campaignDetails,
        playerDetails,
        loading: detailsLoading,
        fetchAll,
        catTab,
        setCatTab,
        categoryId: catTab.categoryId,
        setCategoryId: (catId: string) => {
          setCatTab({ ...catTab, categoryId: catId });
        },
        tabId: catTab.tabId,
        setTabId: (tabId: string) => {
          setCatTab({ ...catTab, tabId: tabId });
        },
        resetIds,
        selectedData,
        setSelectedData,
        publicSelected,
        setPublicSelected,
        needSaveDialogOpen,
        setNeedSaveDialogOpen,
        canTabChange,
        setCanTabChange,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
