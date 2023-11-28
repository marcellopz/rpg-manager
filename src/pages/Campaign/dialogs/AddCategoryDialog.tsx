import React from "react";
import { addCategoryCampaign } from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { User } from "firebase/auth";
import { DetailsContext } from "../context/DetailsContext";

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
  const [error, setError] = React.useState<boolean>(false);
  const { id } = useParams();
  const { authUser } = React.useContext(AuthContext);
  const { fetchAll } = React.useContext(DetailsContext);

  if (!open) {
    return null;
  }

  const addCategory = () => {
    const newCategory = {
      name: categoryName,
      tabs: {},
    };
    addCategoryCampaign(
      id as string,
      newCategory,
      publicSelected ? "" : (authUser as User).uid
    );
    setTimeout(() => {
      fetchAll();
    }, 500);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!categoryName) {
      setError(true);
      return;
    }
    addCategory();
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
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryDialog;
