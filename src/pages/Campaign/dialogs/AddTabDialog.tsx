import React from "react";
import { addTabCampaign } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";

type AddTabDialogProps = {
  open: boolean;
  onClose: () => void;
  publicSelected: boolean;
  categoryId: string;
};

const AddTabDialog: React.FC<AddTabDialogProps> = ({
  open,
  onClose,
  publicSelected,
  categoryId,
}) => {
  const [TabName, setTabName] = React.useState<string>("");
  const [TabType, setTabType] = React.useState<string>("text");
  const [error, setError] = React.useState<boolean>(false);
  const { id } = useParams();
  const { authUser } = React.useContext(AuthContext);
  const { fetchAll } = React.useContext(DetailsContext);

  if (!open) {
    return null;
  }

  const addTab = () => {
    const newTab = {
      name: TabName,
      type: TabType,
      content: "",
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
        <h2>Enter the new Tab name</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tab name*
            <input
              type="text"
              value={TabName}
              onChange={(e) => setTabName(e.target.value)}
            />
            {error && <p className="error">You must enter a Tab name</p>}
          </label>
          <label>
            Tab type*
            <select
              onChange={(e) => setTabType(e.target.value)}
              value={TabType}
            >
              <option value="text">Text</option>
              <option value="inventory">Inventory</option>
              <option value="sheet">Character sheet</option>
              <option value="resource">Resource control</option>
            </select>
            {/* <input
              type="text"
              value={TabName}
              onChange={(e) => setTabName(e.target.value)}
            /> */}
            {error && <p className="error">You must enter a Tab name</p>}
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddTabDialog;
