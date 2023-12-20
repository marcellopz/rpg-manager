import React from "react";
import { addTabCampaign } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";
import LoadImage from "../../../generic-components/load-image/LoadImage";
import { initialCharSheet } from "../id/details/components/character-sheet/CharSheetType";

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
      onClick={onClose}
    >
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>
          {isInventory ? "Enter character name" : "Enter the new Tab name"}
        </h2>
        <form onSubmit={handleSubmit}>
          <label>
            {isInventory ? "Character name*" : "Tab name*"}
            <input
              type="text"
              value={TabName}
              onChange={(e) => setTabName(e.target.value)}
              autoFocus
            />
            {error && (
              <p className="error">
                {isInventory
                  ? "You must enter a Character name"
                  : "You must enter a Tab name"}
              </p>
            )}
          </label>
          {isInventory ? (
            <>
              <label>
                Character strength
                <input
                  type="number"
                  value={CharacterStrength}
                  onChange={(e) => setCharacterStrength(Number(e.target.value))}
                />
              </label>
              <label>
                Character gold
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
              Tab type*
              <select
                onChange={(e) => setTabType(e.target.value)}
                value={TabType}
              >
                <option value="text">Text</option>
                {/* <option value="inventory">Inventory</option> */}
                <option value="sheet">Character sheet</option>
                {/* <option value="resource">Resource control</option> */}
                {/* <option value="combat">Combat control</option> */}
              </select>
              {error && <p className="error">You must enter a Tab name</p>}
            </label>
          )}
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddTabDialog;
