import React from "react";
import { addTabCampaign } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";
import LoadImage from "../../../generic-components/load-image/LoadImage";
import { initialCharSheet } from "../id/details/components/character-sheet/CharSheetType";
import { t } from "i18next";
import { motion } from "framer-motion";

type AddTabDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AddTabDialog: React.FC<AddTabDialogProps> = ({ open, onClose }) => {
  const [TabName, setTabName] = React.useState<string>("");
  const [TabType, setTabType] = React.useState<string>("text");
  const [CharacterStrength, setCharacterStrength] = React.useState<number>(10);
  const [CharacterGold, setCharacterGold] = React.useState<number>(0);
  const [characterImage, setCharacterImage] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const { id } = useParams();
  const { authUser } = React.useContext(AuthContext);
  const { fetchAll, selectedData, categoryId, publicSelected } =
    React.useContext(DetailsContext);

  const isInventory = selectedData?.categories?.[categoryId]?.inventory;

  if (!open) {
    return null;
  }

  const addTab = () => {
    const newTab = {
      name: TabName,
      type: isInventory ? "inventory" : TabType,
      content: isInventory
        ? {
            playerName: TabName,
            playerStrength: CharacterStrength,
            playerGold: CharacterGold,
            playerAvatar: characterImage,
            inventory: {},
          }
        : TabType === "sheet"
        ? initialCharSheet
        : "",
    };

    addTabCampaign(
      id as string,
      newTab,
      publicSelected ? "" : (authUser as User).uid,
      categoryId
    );

    fetchAll();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!TabName) {
      setError(true);
      return;
    }
    addTab();
    setTabName("");
    setTabType("text");
    onClose();
  };

  return (
    <div
      className="dialog-background"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog"
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>
          {isInventory
            ? t("NEW_TAB_INVENTORY_PROMPT")
            : t("NEW_TAB_NORMAL_PROMPT")}
        </h2>
        <form onSubmit={handleSubmit}>
          <label>
            {isInventory ? t("NEW_TAB_INVENTORY_LABEL") : t("NEW_TAB_LABEL")}
            *
            <input
              type="text"
              value={TabName}
              onChange={(e) => setTabName(e.target.value)}
              autoFocus
            />
            {error && (
              <p className="error">
                {isInventory
                  ? t("NEW_TAB_INVENTORY_ERROR")
                  : t("NEW_TAB_ERROR")}
              </p>
            )}
          </label>
          {isInventory ? (
            <>
              <label>
                {t("NEW_TAB_CHARACTER_STR")}
                <input
                  type="number"
                  value={CharacterStrength}
                  onChange={(e) => setCharacterStrength(Number(e.target.value))}
                />
              </label>
              <label>
                {t("NEW_TAB_CHARACTER_GOLD")}
                <input
                  type="number"
                  value={CharacterGold}
                  onChange={(e) => setCharacterGold(Number(e.target.value))}
                />
              </label>
              <LoadImage
                setImageBlob={setCharacterImage}
                aspectRatio={1}
                sizeLimit={1000000}
              />
            </>
          ) : (
            <label>
              {t("NEW_TAB_TYPE_LABEL")}*
              <select
                onChange={(e) => setTabType(e.target.value)}
                value={TabType}
              >
                <option value="text">{t("NEW_TAB_TYPE_TEXT")}</option>
                {/* <option value="inventory">Inventory</option> */}
                <option value="sheet">{t("NEW_TAB_TYPE_SHEET")}</option>
                {/* <option value="resource">Resource control</option> */}
                {/* <option value="combat">Combat control</option> */}
              </select>
              {error && <p className="error">{t("NEW_TAB_ERROR")}</p>}
            </label>
          )}
          <button type="submit">{t("CREATE_BTN")}</button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddTabDialog;
