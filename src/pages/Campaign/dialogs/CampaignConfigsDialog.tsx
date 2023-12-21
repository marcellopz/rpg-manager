import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../context/DetailsContext";
import { editCampaignNameDescription } from "../../../contexts/firebase/database";
import { t } from "i18next";

type CampaignConfigsDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CampaignConfigsDialog: React.FC<CampaignConfigsDialogProps> = ({
  open,
  onClose,
}: CampaignConfigsDialogProps) => {
  const { id } = useParams();
  const { campaignDetails, fetchAll } = useContext(DetailsContext);
  const [campaignName, setCampaignName] = React.useState<string>("");
  const [campaignDescription, setCampaignDescription] =
    React.useState<string>("");

  useEffect(() => {
    setCampaignName(campaignDetails?.name || "");
    setCampaignDescription(campaignDetails?.description || "");
  }, [campaignDetails]);

  if (!open) {
    return null;
  }

  const saveCampaignConfigs = () => {
    editCampaignNameDescription(
      id as string,
      campaignName,
      campaignDescription
    ).then(() => {
      fetchAll();
    });
    onClose();
  };

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <div
        className="dialog"
        style={{ width: "500px" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("NEW_CAMPAIGN_PROMPT")}</h2>
        <div>
          <label>
            {t("NEW_CAMPAIGN_LABEL")}
            <input
              type="text"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </label>
          <label>
            {t("NEW_CAMPAIGN_DESCRIPTION")}
            <textarea
              rows={4}
              value={campaignDescription}
              onChange={(e) => setCampaignDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="confirm-button-container">
          <button
            onClick={onClose}
            className="button-cancel"
          >
            {t("CANCEL_BTN")}
          </button>
          <button
            onClick={saveCampaignConfigs}
            // className="button-save"
          >
            {t("CREATE_BTN")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignConfigsDialog;
