import { useContext, useEffect, useState } from "react";
import { InventoryContent, TabType } from "../campaignTypes";
import CharacterSheet from "./details/CharacterSheet";
import InventoryDetails from "./details/InventoryDetails";
import TextDetails from "./details/TextDetails";
import { CharSheetType } from "./details/components/character-sheet/CharSheetType";
import { onValue, ref } from "firebase/database";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../context/DetailsContext";
import { db } from "../../../contexts/firebase/firebase";

interface CampaignDetailsContentProps {
  tab?: TabType;
}

export default function CampaignDetailsContent({
  tab,
}: CampaignDetailsContentProps) {
  const { id } = useParams();
  const { catTab } = useContext(DetailsContext);
  const [content, setContent] = useState<any>("");

  useEffect(() => {
    const unsubscribe = onValue(
      ref(
        db,
        `campaigns/${id}/categories/${catTab.categoryId}/tabs/${catTab.tabId}`
      ),
      (snapshot) => {
        const newTab = snapshot.val() as TabType;
        if (!newTab) return;
        setContent(newTab.content);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [tab]);

  if (!tab) {
    document.title = "RPG Manager";
    return null;
  }

  document.title = `RPG - ${tab.name}`;

  if (tab.type === "text") {
    return (
      <div className="tab-content">
        <TextDetails />
      </div>
    );
  }

  if (tab.type === "inventory") {
    return (
      <div className="tab-content">
        <InventoryDetails content={(content || "") as InventoryContent} />
      </div>
    );
  }

  if (tab.type === "sheet") {
    return (
      <div className="tab-content">
        <CharacterSheet content={content as CharSheetType} />
      </div>
    );
  }
}
