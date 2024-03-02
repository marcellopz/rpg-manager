import { FormEventHandler, useContext, useState } from "react";
import { updateCombatant } from "../../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../../../../../context/DetailsContext";
import { CombatantTypeWithID } from "../CombatTrackerRowsDragNDrop";
import { CombatantType } from "../../../../../campaignTypes";
import { t } from "i18next";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  combatant: CombatantTypeWithID;
};

const EditCombatantDialog = ({ open, onClose, combatant }: Props) => {
  const { fetchCombatDetails } = useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState(false);
  const [fullHp, setFullHp] = useState(combatant.hp === combatant.maxHp);
  const [visible, setVisible] = useState(combatant.visible);
  const [nameHidden, setNameHidden] = useState(combatant.nameHidden);

  if (!open || !combatant) {
    return null;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get("cname"),
      initiative: formData.get("initiative"),
      maxHp: formData.get("max-hp"),
      hp: formData.get("curr-hp") ?? formData.get("max-hp"),
      ac: formData.get("ac"),
      type: formData.get("type"),
    };

    if (
      !values.name ||
      !values.initiative ||
      !values.maxHp ||
      !values.hp ||
      !values.ac ||
      !values.type
    ) {
      setError(true);
      return;
    }

    const newCombatant: CombatantType = {
      ...combatant,
      name: values.name.toString(),
      initiative: Number(values.initiative),
      maxHp: Number(values.maxHp),
      hp: Number(values.hp),
      ac: Number(values.ac),
      type: values.type.toString() as CombatantType["type"],
      alias: formData.get("visible-name")?.toString(),
      visible: visible,
      nameHidden: nameHidden,
    };

    updateCombatant(id as string, combatant.id, newCombatant);
    fetchCombatDetails();
    onClose();
  };

  return (
    <div
      className="dialog-background edit-combatant"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog add-combatant"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("COMBAT_EDIT_COMBATANT")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="label-with-checkbox">
            <label htmlFor="cname">{t("NAME")}</label>
            <span className="flex">
              <input
                type="checkbox"
                id="name-hidden"
                name="name-hidden"
                checked={nameHidden}
                onChange={() => setNameHidden(!nameHidden)}
              />
              <label htmlFor="name-hidden">{t("COMBAT_HIDE_NAME")}</label>
            </span>
          </div>
          <input
            type="text"
            id="cname"
            name="cname"
            defaultValue={combatant.name}
          />
          <label
            htmlFor="visible-name"
            className={nameHidden ? `` : "disabled"}
          >
            {t("COMBAT_VISIBLE_NAME")}
          </label>
          <input
            type="text"
            id="visible-name"
            name="visible-name"
            className={nameHidden ? `` : "disabled"}
            defaultValue={combatant.alias}
          />
          <div className="p-section">
            <div>
              <label htmlFor="initiative">{t("CHAR_SHEET_INITIATIVE")}</label>
              <input
                type="number"
                id="initiative"
                name="initiative"
                maxLength={2}
                defaultValue={combatant.initiative}
              />
            </div>
            <div>
              <label htmlFor="ac">{t("COMBAT_AC")}</label>
              <input
                type="number"
                id="ac"
                name="ac"
                maxLength={2}
                defaultValue={combatant.ac}
              />
            </div>
          </div>
          <div className="p-section">
            <div>
              <div className="max-hp-check">
                <label htmlFor="max-hp">{t("CHAR_SHEET_MAX_HP")}</label>
                <span className="flex">
                  <input
                    type="checkbox"
                    id="full-hp"
                    name="full-hp"
                    checked={fullHp}
                    onChange={() => setFullHp(!fullHp)}
                  />
                  <label htmlFor="full-hp">{t("COMBAT_FULL_HP")}</label>
                </span>
              </div>
              <input
                type="number"
                id="max-hp"
                name="max-hp"
                defaultValue={combatant.maxHp}
              />
            </div>
            <div>
              <label
                className={fullHp ? "disabled" : ""}
                htmlFor="curr-hp"
              >
                {t("CHAR_SHEET_CURRENT_HP")}
              </label>
              <input
                type="number"
                id="curr-hp"
                name="curr-hp"
                className={fullHp ? "disabled" : ""}
                disabled={fullHp}
                defaultValue={combatant.hp}
              />
            </div>
          </div>
          <div className="label-with-checkbox">
            <label htmlFor="type">{t("COMBAT_COMBATANT_TYPE")}</label>
            <span className="flex">
              <input
                type="checkbox"
                id="visible"
                name="visible"
                checked={visible}
                onChange={() => setVisible(!visible)}
              />
              <label htmlFor="visible">{t("COMBAT_COMBATANT_VISIBLE")}</label>
            </span>
          </div>
          <div className="combatant-type-form">
            <select
              name="type"
              id="type"
              defaultValue={combatant.type}
            >
              <option value="player">{t("COMBAT_PLAYER")}</option>
              <option value="enemy">{t("COMBAT_ENEMY")}</option>
              {/* <option value="npc">Npc</option> */}
              <option value="ally">{t("COMBAT_ALLY")}</option>
            </select>
          </div>
          <button type="submit">{t("SAVE_BTN")}</button>
        </form>
        {error && <p className="error">{t("COMBAT_ERROR")}</p>}
      </motion.div>
    </div>
  );
};

export default EditCombatantDialog;
