import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../context/DetailsContext";
import { editCampaignNameDescription } from "../../../contexts/firebase/database";
import { t } from "i18next";
import LoadImage from "../../../generic-components/load-image/LoadImage";
import { uploadImage } from "../../../contexts/firebase/storage";

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
  const [cardImageBlob, setCardImageBlob] = React.useState<Blob | null>(null);
  const [backdropImageBlob, setBackdropImageBlob] = React.useState<Blob | null>(
    null
  );

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
    if (cardImageBlob) {
      // @ts-ignore
      uploadImage(cardImageBlob, `campaign/cardImage/${id}`);
    }
    if (backdropImageBlob) {
      // @ts-ignore
      uploadImage(backdropImageBlob, `campaign/backdropImage/${id}`).then(
        () => {
          window.location.reload();
        }
      );
    }
    onClose();
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
        <label>{t("CAMPAIGN_CARD_IMAGE")}</label>
        <LoadImage
          aspectRatio={2}
          setImageActualBlob={setCardImageBlob}
          sizeLimit={8000000}
        />
        <label>{t("CAMPAIGN_BANNER_IMAGE")}</label>
        <LoadImage
          aspectRatio={5}
          setImageActualBlob={setBackdropImageBlob}
          sizeLimit={8000000}
        />
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
            {t("CONFIRM")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignConfigsDialog;
