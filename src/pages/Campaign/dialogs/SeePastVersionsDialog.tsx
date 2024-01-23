import React, { useContext, useEffect } from "react";
import { DetailsContext } from "../context/DetailsContext";
import auth from "../../../contexts/firebase/firebase";
import {
  getPastVersions,
  saveTabContent,
} from "../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { ContentHistoryType } from "../campaignTypes";
import { t } from "i18next";

const ConfirmDialogRestore: React.FC<{
  open: boolean;
  onClose: () => void;
  onCloseAll: () => void;
  content: string;
}> = ({ open, onClose, content, onCloseAll }) => {
  const { id } = useParams();
  const { catTab, publicSelected, fetchAll } = useContext(DetailsContext);

  if (!open) return null;
  return (
    <div
      className="dialog-background"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>Are you sure you want to restore this version?</h3>
        <pre>{content}</pre>
        <div className="unsaved-changes-dialog-container">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => {
              saveTabContent(
                id as string,
                catTab.categoryId,
                catTab.tabId,
                publicSelected ? "" : (auth.currentUser?.uid as string),
                content
              ).then(() => {
                fetchAll();
              });
              onClose();
              onCloseAll();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const VersionComponent: React.FC<{
  timestamp: number;
  content: string;
  author: string | undefined;
  onCloseAll: () => void;
}> = ({ timestamp, content, onCloseAll, author }) => {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [confirmDialogOpen, setConfirmDialogOpen] =
    React.useState<boolean>(false);

  return (
    <>
      <div className="past-version">
        <h4>{new Date(timestamp).toString()}</h4>
        {author && (
          <span>
            <b>{t("AUTHOR")}:</b> {author}
          </span>
        )}
        <pre className="past-version-content">
          {content.length > 100 && !showAll ? (
            <>
              <p>{content.slice(0, 100)}</p>
              <p
                className="view-more cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                {t("VIEW_MORE")}
              </p>
            </>
          ) : (
            content
          )}
        </pre>
        <span
          className="bold cursor-pointer"
          onClick={() => setConfirmDialogOpen(true)}
        >
          {t("RESTORE_VERSION")}
        </span>
      </div>
      <ConfirmDialogRestore
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        content={content}
        onCloseAll={onCloseAll}
      />
    </>
  );
};

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Versions {
  [key: string]: ContentHistoryType<string>;
}

const SeePastVersionsDialog: React.FC<Props> = ({ open, onClose }) => {
  const { id } = useParams();
  const { catTab, publicSelected } = useContext(DetailsContext);
  const [versions, setVersions] = React.useState<Versions | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    if (!open) return;
    getPastVersions(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string)
    ).then((vs) => {
      setVersions(vs);
      setLoading(false);
    });
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="dialog-background"
      onClick={() => {
        onClose();
        setLoading(true);
        setVersions(null);
      }}
    >
      <div
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("CAMPAIGN_PAST_VERSIONS_TAB")}:</h2>
        <div className="past-versions-dialog-container">
          {loading ? <div>{t("LOADING")}...</div> : null}
          {versions && !loading ? (
            Object.entries(versions)
              .sort(([_k1, v1], [_k2, v2]) => v2.timestamp - v1.timestamp)
              .map(([key, value]) => (
                <VersionComponent
                  key={key}
                  timestamp={value.timestamp}
                  content={value.content}
                  author={value.author}
                  onCloseAll={() => {
                    onClose();
                    setVersions(null);
                    setLoading(true);
                  }}
                />
              ))
          ) : (
            <div>{t("NO_PAST_VERSIONS")}.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeePastVersionsDialog;
