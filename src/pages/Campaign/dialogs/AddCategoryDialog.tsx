import React from "react";
import { addCategoryCampaign } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";
import { CategoryType } from "../campaignTypes";

type AddCategoryDialogProps = {
  open: boolean;
  onClose: () => void;
  publicSelected: boolean;
};

const AddCategoryDialog: React.FC<AddCategoryDialogProps> = ({
  open,
  onClose,
  publicSelected,
}) => {
  const [categoryName, setCategoryName] = React.useState<string>("");
  const [categoryType, setCategoryType] = React.useState<string>("normal");
  const [error, setError] = React.useState<boolean>(false);
  const { id } = useParams();
  const { authUser } = React.useContext(AuthContext);
  const { fetchAll } = React.useContext(DetailsContext);

  if (!open) {
    return null;
  }

  const addCategory = () => {
    const newCategory: CategoryType = {
      name: categoryName,
      inventory: categoryType === "inventory",
      tabs: {},
    };
    addCategoryCampaign(
      id as string,
      newCategory,
      publicSelected ? "" : (authUser as User).uid
    );
    fetchAll();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!categoryName) {
      setError(true);
      return;
    }
    addCategory();
    setCategoryName("");
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
        <h2>Enter the new category name</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Category name*
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            {error && <p className="error">You must enter a category name</p>}
          </label>
          {publicSelected && (
            <label>
              Category type:
              <select
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="inventory">Inventory</option>
              </select>
            </label>
          )}

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryDialog;
