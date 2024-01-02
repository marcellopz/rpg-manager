import React, { useContext } from "react";
import CampaignPublicPrivateDropdown from "./CampaignPublicPrivateDropdown";
import { ResizeCallbackData } from "react-resizable";
import AddCategoryDialog from "../dialogs/AddCategoryDialog";
import AddTabDialog from "../dialogs/AddTabDialog";
import ConfirmDeleteDialog from "../dialogs/ConfirmDeleteDialog";
import { DetailsContext } from "../context/DetailsContext";
import ContentSelectionDragND from "./ContentSelectionDragND";
import { t } from "i18next";

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
    canTabChange,
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
          <ContentSelectionDragND
            width={categoryWidth}
            content={categories}
            selectedId={categoryId}
            onItemClick={(cat_id) => {
              handleCategoryChange(cat_id);
            }}
            onDeleteClick={(cat_id) => handleDeleteCategory(cat_id)}
            setAddItemDialogOpen={setAddCategoryDialogOpen}
            textAddItem={t("ADD_CATEGORY")}
            type="category"
            onResize={handleCategoryResize}
          />
          <ContentSelectionDragND
            width={tabWidth}
            content={tabs}
            selectedId={tabId}
            onItemClick={(tab_id) => {
              if (!canTabChange) return;
              setTabId(tab_id);
            }}
            onDeleteClick={(tab_id) => handleDeleteTab(categoryId, tab_id)}
            setAddItemDialogOpen={setAddTabDialogOpen}
            textAddItem={
              selectedCategory?.inventory ? t("ADD_INVENTORY") : t("ADD_TAB")
            }
            type="tab"
            onResize={handleTabResize}
          />
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
