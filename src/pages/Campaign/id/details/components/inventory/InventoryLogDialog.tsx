import { t } from "i18next";
import { motion } from "framer-motion";
import { DetailsContext } from "../../../../context/DetailsContext";
import { useContext } from "react";
import InventoryLogRow from "./InventoryLogRow";

type InventoryLogDialogProps = {
  open: boolean;
  onClose: () => void;
};

const InventoryLogDialog = ({ open, onClose }: InventoryLogDialogProps) => {
  const { campaignDetails } = useContext(DetailsContext);

  const inventoryLog = campaignDetails?.inventoryLog;

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="dialog-background" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="dialog relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2>{t("INVENTORY_LOG_TITLE")}</h2>
          <div className="inventory-log-list">
            {inventoryLog ? (
              Object.entries(inventoryLog)
                .reverse()
                .map(([key, value]) => {
                  return <InventoryLogRow log={value} key={key} />;
                })
            ) : (
              <div>{t("NO_LOGS")}</div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default InventoryLogDialog;
