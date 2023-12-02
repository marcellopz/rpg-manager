import React, { useContext } from "react";
import CampaignPublicPrivateDropdown from "./CampaignPublicPrivateDropdown";
import { Resizable, ResizeCallbackData } from "react-resizable";
import AddCategoryDialog from "../dialogs/AddCategoryDialog";
import AddTabDialog from "../dialogs/AddTabDialog";
import ConfirmDeleteDialog from "../dialogs/ConfirmDeleteDialog";
import { DetailsContext } from "../context/DetailsContext";

interface deleteCategoryTabDialogProps {
  open: boolean;
  publicSelected: boolean;
  category: { id: string; name: string };
  tab: { id: string; name: string } | null;
}

const deleteCategoryInitialState: deleteCategoryTabDialogProps = {
  open: false,
  publicSelected: true,
  category: { id: "", name: "" },
  tab: null,
};

interface CampaignContentSelectionProps {
  handleCategoryChange: (category: string) => void;
  resetCatTab: () => void;
}

export default function CampaignContentSelection({
  handleCategoryChange,
  resetCatTab,
}: CampaignContentSelectionProps) {
  // context states
  const {
    categoryId,
    tabId,
    setTabId,
    selectedData,
    publicSelected,
    setPublicSelected,
  } = useContext(DetailsContext);

  // resizable states
  const [hideSelection, setHideSelection] = React.useState<boolean>(false);
  const [categoryWidth, setCategoryWidth] = React.useState<number>(200);
  const [tabWidth, setTabWidth] = React.useState<number>(200);

  // dialog states
  const [addCategoryDialogOpen, setAddCategoryDialogOpen] =
    React.useState<boolean>(false);
  const [addTabDialogOpen, setAddTabDialogOpen] =
    React.useState<boolean>(false);
  const [deleteDialog, setDeleteDialog] =
    React.useState<deleteCategoryTabDialogProps>(deleteCategoryInitialState);

  const handleCategoryResize = (
    e: React.SyntheticEvent<Element, Event>,
    data: ResizeCallbackData
  ) => {
    e.stopPropagation();
    setCategoryWidth(data.size.width);
  };

  const handleTabResize = (
    e: React.SyntheticEvent<Element, Event>,
    data: ResizeCallbackData
  ) => {
    e.stopPropagation();
    setTabWidth(data.size.width);
  };

  const handleHide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHideSelection((prev) => !prev);
  };

  const handleDeleteCategory = (categoryId: string) => {
    if (!selectedData?.categories) return;
    setDeleteDialog({
      open: true,
      publicSelected: publicSelected,
      category: {
        id: categoryId,
        name: selectedData.categories[categoryId].name,
      },
      tab: null,
    });
  };

  const handleDeleteTab = (categoryId: string, tabId: string) => {
    if (!selectedData?.categories) return;
    const selectedCategory = selectedData.categories[categoryId];
    const selectedTab = selectedCategory?.tabs?.[tabId];

    if (!selectedTab?.name) return;

    setDeleteDialog({
      open: true,
      publicSelected: publicSelected,
      category: {
        id: categoryId,
        name: selectedCategory.name,
      },
      tab: {
        id: tabId,
        name: selectedTab.name,
      },
    });
  };

  if (!selectedData) return null;

  const categories = selectedData.categories;

  const selectedCategory = categories && categories[categoryId];

  const tabs = selectedCategory && categories[categoryId].tabs;

  return (
    <>
      <div
        style={{ width: categoryWidth + tabWidth }}
        className="content-container"
      >
        <CampaignPublicPrivateDropdown
          hideSelection={hideSelection}
          handleHide={handleHide}
          publicSelected={publicSelected}
          setPublicSelected={setPublicSelected}
          resetCatTab={resetCatTab}
        />
        <div
          className="content-selection"
          style={
            hideSelection ? { display: "none", height: 0, minHeight: 0 } : {}
          }
        >
          <Resizable
            width={categoryWidth}
            axis="x"
            minConstraints={[40, 40]}
            maxConstraints={[400, 400]}
            onResize={handleCategoryResize}
          >
            <div
              style={{ width: categoryWidth }}
              className="category-selection item-list"
            >
              {categories &&
                Object.entries(categories).map(([cat_id, cat]) => (
                  <div
                    className={categoryId === cat_id ? "tab-selected" : ""}
                    onClick={() => handleCategoryChange(cat_id)}
                    key={cat_id}
                  >
                    <p>{cat.name}</p>
                    <p
                      onClick={() => handleDeleteCategory(cat_id)}
                      className="smaller-button"
                    >
                      🗑️
                    </p>
                  </div>
                ))}
              <div
                className="create-new"
                onClick={() => setAddCategoryDialogOpen(true)}
              >
                + Add category
              </div>
            </div>
          </Resizable>
          <Resizable
            width={tabWidth}
            axis="x"
            minConstraints={[40, 40]}
            maxConstraints={[400, 400]}
            onResize={handleTabResize}
          >
            <div
              style={{ width: tabWidth }}
              className="tab-selection item-list"
            >
              {tabs &&
                Object.entries(tabs).map(([tab_id, tab]) => (
                  <div
                    className={tabId === tab_id ? "tab-selected" : ""}
                    onClick={() => setTabId(tab_id)}
                    key={tab_id}
                  >
                    <p>{tab.name}</p>
                    <p
                      className="smaller-button"
                      onClick={() => {
                        handleDeleteTab(categoryId, tab_id);
                      }}
                    >
                      🗑️
                    </p>
                  </div>
                ))}
              {categories && (
                <div
                  className="create-new"
                  onClick={() => setAddTabDialogOpen(true)}
                >
                  {selectedCategory?.inventory
                    ? "+ Add inventory"
                    : "+ Add tab"}
                </div>
              )}
            </div>
          </Resizable>
        </div>
      </div>
      <AddCategoryDialog
        publicSelected={publicSelected}
        open={addCategoryDialogOpen}
        onClose={() => {
          setAddCategoryDialogOpen(false);
        }}
      />
      <AddTabDialog
        open={addTabDialogOpen}
        onClose={() => setAddTabDialogOpen(false)}
      />
      <ConfirmDeleteDialog
        {...deleteDialog}
        onClose={() => {
          setDeleteDialog(deleteCategoryInitialState);
        }}
      />
    </>
  );
}
