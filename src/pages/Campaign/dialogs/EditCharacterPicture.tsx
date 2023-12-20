import { useContext, useState } from "react";
import LoadImage from "../../../generic-components/load-image/LoadImage";
import { DetailsContext } from "../context/DetailsContext";
import { useParams } from "react-router-dom";
import { saveCharImageInventory } from "../../../contexts/firebase/database";

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
      onClick={onClose}
    >
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Edit Character Picture</h2>
        <LoadImage
          setImageBlob={setCharacterImage}
          aspectRatio={1}
          sizeLimit={1000000}
        />

        <div className="save-btn">
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditCharacterPicture;
