import { useContext, useEffect, useState } from "react";
import "./combat.css";
import { DetailsContext } from "../../../../context/DetailsContext";
import { startCombatDefaultValue } from "./combatDefaultValue";
import auth, { db } from "../../../../../../contexts/firebase/firebase";
import {
  updateCombatDetails,
  updateCombatDmNotes,
} from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import CombatTrackerRowsDragNDrop from "./CombatTrackerRowsDragNDrop";
import AddCombatantDialog from "./dialogs/AddCombatantDialog";
import ConfirmEndCombatDialog from "./dialogs/ConfirmEndCombatDialog";
import COmbatTrackerTableHeader from "./ComponentTrackerTableHeader";
import CombatTrackerTableFooter from "./CombatTrackerTableFooter";
import { onValue, ref } from "firebase/database";
import { CampaignType, CombatType } from "../../../../campaignTypes";
import { t } from "i18next";
import { motion } from "framer-motion";

const CombatColorSystemBar = () => {
  return (
    <div className="combat-color-system-bar">
      <div className="preto">0% - 25%</div>
      <div className="vermelho">25% - 50%</div>
      <div className="amarelo">50% - 75%</div>
      <div className="verde">75% - 100%</div>
    </div>
  );
};

type CombatTrackerDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CombatTrackerDialog = ({ open, onClose }: CombatTrackerDialogProps) => {
  const { combatDetails, fetchCombatDetails, isCombatDm, setCampaignDetails } =
    useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();
  const [openAddCombatant, setOpenAddCombatant] = useState(false);
  const [openConfirmEndCombat, setOpenConfirmEndCombat] = useState(false);

  useEffect(() => {
    if (id === "1") return;
    onValue(ref(db, `campaigns/${id}/combat`), (snapshot) => {
      const newCombat = snapshot.val() as CombatType;
      setCampaignDetails(
        (prev) =>
          ({
            ...prev,
            combat: newCombat,
          } as CampaignType)
      );
    });
  }, [id]);

  const handleStartCombat = () => {
    if (!auth.currentUser?.uid) {
      return;
    }
    const newCombat = startCombatDefaultValue(
      auth.currentUser?.uid,
      auth.currentUser?.displayName as string
    );
    updateCombatDetails(id as string, newCombat);
    fetchCombatDetails();
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="dialog-background"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="dialog relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {!combatDetails && (
            <div className="no-combat">
              <p>{t("COMBAT_NO_COMBAT")}</p>
              <div>
                <button onClick={handleStartCombat}>{t("COMBAT_START")}</button>
              </div>
            </div>
          )}
          {combatDetails && (
            <div className="combat">
              <div className="combat-header">
                <div>
                  <h2>{t("COMBAT_TRACKER_TITLE")}</h2>
                  <h4>
                    {t("COMBAT_DM")}: {combatDetails?.dmName ?? ""}
                  </h4>
                </div>
                <div className="center-bar">
                  <span>{t("COMBAT_COLOR_SCHEME_LABEL")}</span>
                  <CombatColorSystemBar />
                </div>
                {/* <button>Add characters from Inventory</button> */}
              </div>
              <div className="combat-content">
                <div className="tracker-table">
                  <COmbatTrackerTableHeader isCombatDm={isCombatDm} />
                  <CombatTrackerRowsDragNDrop
                    combatants={combatDetails.combatants}
                  />
                </div>
                <CombatTrackerTableFooter
                  setOpenAddCombatant={setOpenAddCombatant}
                  setOpenConfirmEndCombat={setOpenConfirmEndCombat}
                />
                {isCombatDm && (
                  <div className="dm-notes">
                    <p>{t("COMBAT_DM_NOTES")}:</p>
                    <div id="dm-notes">
                      <textarea
                        value={combatDetails.dmNotes ?? ""}
                        onChange={(e) => {
                          updateCombatDmNotes(id as string, e.target.value);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <AddCombatantDialog
        open={openAddCombatant}
        onClose={() => setOpenAddCombatant(false)}
      />
      <ConfirmEndCombatDialog
        open={openConfirmEndCombat}
        onClose={() => {
          setOpenConfirmEndCombat(false);
        }}
        closeAll={onClose}
      />
    </>
  );
};

export default CombatTrackerDialog;
