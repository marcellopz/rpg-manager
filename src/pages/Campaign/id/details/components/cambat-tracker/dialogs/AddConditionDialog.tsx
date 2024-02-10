import { FormEventHandler, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../../../../../context/DetailsContext";
import { CombatantTypeWithID } from "../CombatTrackerRowsDragNDrop";
import ConditionChip from "../ConditionChip";
import { addConditionToCombatant } from "../../../../../../../contexts/firebase/database";
import { t } from "i18next";
import { motion } from "framer-motion";

const colors = [
  { name: "gray", color: "#A9A9A9" }, // Lighter gray
  { name: "red", color: "#FF6B6B" }, // Soft red
  { name: "blue", color: "#4D90FE" }, // Soft blue
  { name: "green", color: "#90EE90" }, // Light green
  { name: "yellow", color: "#FFFACD" }, // Lemon chiffon (soft yellow)
  { name: "orange", color: "#FFA07A" }, // Light salmon (soft orange)
  { name: "purple", color: "#D8BFD8" }, // Thistle (soft purple)
  { name: "pink", color: "#FFC0CB" }, // Light pink
  { name: "brown", color: "#BC8F8F" }, // Rosy brown (softer brown)
];

type Props = {
  open: boolean;
  onClose: () => void;
  combatant: CombatantTypeWithID;
};

const AddConditionDialog = ({ open, onClose, combatant }: Props) => {
  const { fetchCombatDetails } = useContext(DetailsContext);
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState(false);
  const [conditionName, setConditionName] = useState("");
  const [duration, setDuration] = useState(1);
  const [indefinite, setIndefinite] = useState(false);
  const [color, setColor] = useState("#A9A9A9");

  if (!open) {
    return null;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const values = {
      name: conditionName,
      duration: indefinite ? -1 : duration,
      color: color,
    };

    if (!values.name || !values.duration || !values.color) {
      setError(true);
      return;
    }

    // addCombatant(id as string, combatant);
    addConditionToCombatant(id as string, combatant.id, values);
    fetchCombatDetails();
    onClose();
    setColor("#A9A9A9");
    setConditionName("");
    setDuration(1);
    setIndefinite(false);
  };

  return (
    <div
      className="dialog-background add-combatant"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>
          {t("COMBAT_ADD_CONDITION_TO")}
          {combatant.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cname">{t("COMBAT_CONDITION_NAME")}</label>
          <input
            type="text"
            id="cname"
            name="cname"
            onChange={(e) => {
              setConditionName(e.target.value);
            }}
          />
          <div>
            <div className="rounds-duration">
              <label htmlFor="duration">{t("COMBAT_DURATION_TURNS")}</label>
              <span className="flex">
                <input
                  type="checkbox"
                  id="indefinite"
                  name="indefinite"
                  checked={indefinite}
                  onChange={(e) => {
                    setIndefinite(e.target.checked);
                  }}
                />
                <label htmlFor="indefinite">{t("INDEFINITE")}</label>
              </span>
            </div>
            <input
              className={`w-full ${indefinite ? "disabled" : ""}`}
              type="number"
              id="duration"
              name="duration"
              onChange={(e) => setDuration(parseInt(e.target.value))}
              disabled={indefinite}
            />
          </div>
          <div className="a-section">
            <div>
              <label htmlFor="cname">{t("COLOR")}</label>
              <select
                name="color"
                id="color"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              >
                {colors.map((c) => (
                  <option
                    key={c.color}
                    className="color-option"
                    value={c.color}
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>{t("PREVIEW")}</label>
              <div className="showcase-chip">
                <ConditionChip
                  color={color}
                  title={conditionName === "" ? "name" : conditionName}
                  number={duration}
                  indefinite={indefinite}
                  onClose={() => {}}
                />
              </div>
            </div>
          </div>
          <button type="submit">{t("COMBAT_ADD")}</button>
        </form>
        {error && <p className="error">{t("COMBAT_CONDITION_ERROR")}</p>}
      </motion.div>
    </div>
  );
};

export default AddConditionDialog;
