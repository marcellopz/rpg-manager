import { useContext, useState } from "react";
import LoadImage from "../../../generic-components/load-image/LoadImage";
import { DetailsContext } from "../context/DetailsContext";
import { useParams } from "react-router-dom";
import { saveCharImageInventory } from "../../../contexts/firebase/database";
import { t } from "i18next";

type EditCharacterPictureProps = {
  open: boolean;
  onClose: () => void;
};

const EditCharacterPicture = ({ open, onClose }: EditCharacterPictureProps) => {
  const { fetchAll, categoryId, tabId } = useContext(DetailsContext);
  const [characterImage, setCharacterImage] = useState<string>("");
  const { id } = useParams();

  if (!open) {
    return null;
  }

  const onSave = () => {
    if (characterImage === "") return;
    saveCharImageInventory(
      id as string,
      categoryId,
      tabId,
      characterImage
    ).then(() => {
      fetchAll();
    });
  };

  return (
    <div
      className="dialog-background"
      onMouseDown={onClose}
    >
      <div
        className="dialog"
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("EDIT_CHAR_PICTURE")}</h2>
        <LoadImage
          setImageBlob={setCharacterImage}
          aspectRatio={1}
          sizeLimit={1000000}
        />

        <div className="save-btn">
          <button onClick={onSave}>{t("SAVE_BTN")}</button>
        </div>
      </div>
    </div>
  );
};

export default EditCharacterPicture;
