import React, { createContext } from "react";
import { CampaignType, CombatType, PlayerType } from "../campaignTypes";
import useDetails from "../hooks/useDetails";
import auth from "../../../contexts/firebase/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { isDemo } from "../../../contexts/firebase/databaseSetup";

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
  combatDetails: CombatType | undefined;
  isCombatDm: boolean;
  fetchCombatDetails: () => void;
  setCampaignDetails: React.Dispatch<React.SetStateAction<CampaignType | null>>;
  setCombatDetails: React.Dispatch<
    React.SetStateAction<CombatType | undefined>
  >;
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
  combatDetails: undefined,
  isCombatDm: false,
  fetchCombatDetails: () => {},
  setCampaignDetails: () => {},
  setCombatDetails: () => {},
});

const DetailsProvider: React.FC<DetailsProviderProps> = ({ children }) => {
  const {
    combatDetails,
    campaignDetails,
    playerDetails,
    detailsLoading,
    fetchAll,
    fetchCombatDetails,
    setCampaignDetails,
    setCombatDetails,
  } = useDetails();
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
  const {
    id,
    name,
    catId: routeCatId,
    tabId: routeTabId,
  } = useParams<{ id: string; name: string; catId: string; tabId: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    // if (!catTab.categoryId || !catTab.tabId) return;
    const demo = isDemo();
    navigate(
      `/${demo ? "demo-campaign" : "campaign"}/${id}/${demo ? "demo" : name}/${
        publicSelected ? "public" : "private"
      }${catTab.categoryId ? "/" + catTab.categoryId : ""}${
        catTab.tabId ? "/" + catTab.tabId : ""
      }`
    );
  }, [catTab, publicSelected]);

  React.useEffect(() => {
    if (!selectedData) return;
    if (!selectedData?.categories?.[catTab.categoryId]) {
      resetIds();
      return;
    }
    if (!selectedData?.categories?.[catTab.categoryId]?.tabs?.[catTab.tabId]) {
      if (!selectedData?.categories?.[catTab.categoryId]?.tabs) return;
      const firstTab = Object.keys(
        selectedData?.categories?.[catTab.categoryId]?.tabs as {
          [key: string]: any;
        }
      )[0];
      setCatTab({ ...catTab, tabId: firstTab });
    }
  }, [selectedData]);

  React.useEffect(() => {
    if (routeCatId) {
      setCatTab({ categoryId: routeCatId, tabId: routeTabId ?? "" });
    } else {
      resetIds();
    }
  }, [publicSelected]);

  React.useEffect(() => {
    if (
      catTab.categoryId === "" &&
      catTab.tabId === "" &&
      campaignDetails?.categories
    ) {
      if (routeCatId) {
        setCatTab({ categoryId: routeCatId, tabId: routeTabId ?? "" });
      } else {
        resetIds();
      }
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
    const firstCategory =
      Object.entries(obj.categories).find(
        ([_, categ]) => categ.listIndex === 0
      )?.[0] ?? Object.keys(obj.categories)[0];

    if (obj.categories[firstCategory].tabs) {
      firstTab =
        Object.entries(
          obj.categories[firstCategory].tabs as {
            [key: string]: any;
          }
        ).find(([_, ta]) => ta.listIndex === 0)?.[0] ||
        Object.keys(
          obj.categories[firstCategory].tabs as {
            [key: string]: any;
          }
        )[0] ||
        "";
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
        combatDetails,
        isCombatDm: combatDetails?.dmId === auth.currentUser?.uid,
        fetchCombatDetails,
        setCampaignDetails,
        setCombatDetails,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
