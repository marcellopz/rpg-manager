import { t } from "i18next";
import { useEffect, useRef } from "react";
const CombatTrackerRowContextMenu = ({
  x,
  y,
  open,
  onClose,
  onOpenEditDialog,
  onOpenDeleteDialog,
  onOpenAddConditionDialog,
}: {
  onClose: () => void;
  open: boolean;
  x: number;
  y: number;
  onOpenEditDialog: () => void;
  onOpenDeleteDialog: () => void;
  onOpenAddConditionDialog: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="context-menu"
        style={{
          top: y,
          left: x,
        }}
        ref={menuRef}
      >
        <ul>
          <li
            onClick={() => {
              onClose();
              onOpenAddConditionDialog();
            }}
          >
            {t("COMBAT_ADD_CONDITION")}
          </li>
          <li
            onClick={() => {
              onOpenEditDialog();
              onClose();
            }}
          >
            {t("EDIT")}
          </li>
          <li
            onClick={() => {
              onClose();
              onOpenDeleteDialog();
            }}
          >
            {t("DELETE_BTN")}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CombatTrackerRowContextMenu;
