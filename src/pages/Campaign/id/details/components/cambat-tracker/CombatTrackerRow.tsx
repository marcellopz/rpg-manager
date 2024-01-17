import { useContext, useEffect, useState } from "react";
import { CombatantType } from "../../../../campaignTypes";
import { updateCombatantHp } from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { CombatantTypeWithID } from "./CombatTrackerRowsDragNDrop";
import { DetailsContext } from "../../../../context/DetailsContext";
import CombatTrackerRowContextMenu from "./CombatTrackerRowContextMenu";

const getRowClassName = (combatent: CombatantType) => {
  const x = (combatent.hp / combatent.maxHp) * 100;
  if (x > 75) {
    return "verde";
  } else if (x > 50 && x <= 75) {
    return "amarelo";
  } else if (x > 25 && x <= 50) {
    return "vermelho";
  } else {
    return "preto";
  }
  //   switch (combatent.type) {
  //     case "player":
  //       return "player";
  //     case "npc":
  //       return "npc";
  //     case "enemy":
  //       return "enemy";
  //     case "ally":
  //       return "ally";
  //     default:
  //       return "";
  //   }
};

const getRowEmoji = (combatent: CombatantType) => {
  switch (combatent.type) {
    case "player":
      return "🤝";
    case "enemy":
      return "⚔️";
    case "ally":
      return "🤝";
    default:
      return "";
  }
};

export default function CombatTrackerRow({
  combatant,
  turn,
}: {
  combatant: CombatantTypeWithID;
  turn: number;
}) {
  const { id } = useParams<{ id: string }>();
  const { fetchCombatDetails } = useContext(DetailsContext);
  const [hp, setHp] = useState(combatant.hp);
  const [openPlus, setOpenPlus] = useState(false);
  const [healValue, setHealValue] = useState(0);
  const [openMinus, setOpenMinus] = useState(false);
  const [damageValue, setDamageValue] = useState(0);
  const [editingHp, setEditingHp] = useState(false);
  const [contextMenuCoords, setContextMenuCoords] = useState({ x: 0, y: 0 });
  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  useEffect(() => {
    setHp(combatant.hp);
  }, [combatant.hp]);

  return (
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setContextMenuCoords({ x: e.clientX - 50, y: 30 });
          setContextMenuOpen(true);
        }}
        className={`tracker-table-body-row ${getRowClassName(combatant)} ${
          combatant.orderIndex === turn ? "turn" : ""
        }`}
      >
        <CombatTrackerRowContextMenu
          open={contextMenuOpen}
          x={contextMenuCoords.x}
          y={contextMenuCoords.y}
          onClose={() => setContextMenuOpen(false)}
          onMenuSelect={(option) => {
            console.log(option);
          }}
        />
        <div className="tracker-table-initiative">{combatant.initiative}</div>
        <span className="separator" />
        <div className="tracker-table-name">
          {`${getRowEmoji(combatant)} ${combatant.name}`}
          {/* {combatant.name} */}
        </div>
        <span className="separator" />
        <div className="tracker-table-ac">{combatant.ac}</div>
        <span className="separator" />
        <div className="tracker-table-hp">
          {openPlus ? (
            <input
              id="heal"
              type="text"
              autoFocus
              value={healValue ?? 0}
              onChange={(e) => setHealValue(Number(e.target.value) ?? 0)}
              onBlur={() => setOpenPlus(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setOpenPlus(false);
                  updateCombatantHp(id as string, combatant.id, hp + healValue);
                  fetchCombatDetails();
                  setHealValue(0);
                }
              }}
            />
          ) : (
            <p
              id="heal"
              onClick={() => setOpenPlus(true)}
            >
              ➕
            </p>
          )}
          {editingHp ? (
            <input
              type="text"
              id="hp"
              autoFocus
              value={hp ?? 0}
              onChange={(e) => setHp(Number(e.target.value) ?? 0)}
              onBlur={() => setEditingHp(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingHp(false);
                  updateCombatantHp(id as string, combatant.id, hp);
                  fetchCombatDetails();
                }
              }}
            />
          ) : (
            <p
              id="hp"
              onDoubleClick={() => setEditingHp(true)}
            >
              {hp} / {combatant.maxHp}
            </p>
          )}

          {openMinus ? (
            <input
              id="damage"
              type="text"
              autoFocus
              value={damageValue ?? 0}
              onChange={(e) => setDamageValue(Number(e.target.value) ?? 0)}
              onBlur={() => setOpenMinus(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setOpenMinus(false);
                  updateCombatantHp(
                    id as string,
                    combatant.id,
                    hp - damageValue
                  );
                  fetchCombatDetails();
                  setDamageValue(0);
                }
              }}
            />
          ) : (
            <p
              id="damage"
              onClick={() => setOpenMinus(true)}
            >
              ➖
            </p>
          )}
        </div>
      </div>
    </>
  );
}
