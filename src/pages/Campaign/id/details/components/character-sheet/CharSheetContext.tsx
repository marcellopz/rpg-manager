import { createContext, useContext, useEffect, useState } from "react";
import { CharSheetType } from "./CharSheetType";
import { saveTabContent } from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../../../../context/DetailsContext";
import auth from "../../../../../../contexts/firebase/firebase";

// Define the shape of your context value
interface CharSheetContextValue {
  charSheetData: CharSheetType;
  setCharSheetData: React.Dispatch<React.SetStateAction<CharSheetType>>;
  saveCharSheet: () => void;
  loadCharSheet: () => void;
}

// Create the context
const CharSheetContext = createContext<CharSheetContextValue>(
  {} as CharSheetContextValue
);

// Create a custom hook to access the context
const useCharSheetContext = () => {
  const context = useContext(CharSheetContext);
  if (!context) {
    throw new Error(
      "useCharSheetContext must be used within a CharSheetContextProvider"
    );
  }
  return context;
};

interface CharSheetContextProviderProps {
  children: React.ReactNode;
  content: CharSheetType;
}

const CharSheetContextProvider = ({
  children,
  content,
}: CharSheetContextProviderProps) => {
  const [charSheetData, setCharSheetData] = useState<CharSheetType>(content);
  const { id } = useParams();
  const { catTab, publicSelected, fetchAll } = useContext(DetailsContext);

  useEffect(() => {
    setCharSheetData(content);
  }, [content]);

  const saveCharSheet = () => {
    saveTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string),
      charSheetData
    ).then(() => {
      fetchAll();
    });
  };

  const loadCharSheet = () => {
    fetchAll();
  };

  return (
    <CharSheetContext.Provider
      value={{ charSheetData, setCharSheetData, saveCharSheet, loadCharSheet }}
    >
      {children}
    </CharSheetContext.Provider>
  );
};

// Export the context, the custom hook, and the provider
export { CharSheetContext, useCharSheetContext, CharSheetContextProvider };
