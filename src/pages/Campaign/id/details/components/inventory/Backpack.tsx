import { useState, useContext } from "react";
import { updateGold } from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../../../../context/DetailsContext";

const Backpack = ({
  strength_box,
  weightless_box,
  little_heavy_box,
  very_heavy_box,
  total_weight_box,
  gold_box,
  carrying_weight,
}: {
  strength_box: number;
  weightless_box: number;
  little_heavy_box: number;
  very_heavy_box: number;
  total_weight_box: number;
  gold_box: number;
  carrying_weight: number;
}) => {
  const { id } = useParams();
  const { catTab, fetchAll } = useContext(DetailsContext);
  const [editingGoldValue, setEditingGoldValue] = useState<number>(gold_box);
  const [editingGold, setEditingGold] = useState(false);

  const weightCheck = (weight: number) => {
    if (weight <= weightless_box) {
      return "✅";
    } else if (weight <= little_heavy_box) {
      return "⚠️";
    } else if (weight <= very_heavy_box) {
      return "❌";
    } else if (weight <= total_weight_box) {
      return "❌❌";
    }
    return "❌❌❌";
  };

  const handleSaveGold = () => {
    updateGold(id as string, catTab.categoryId, catTab.tabId, editingGoldValue);
    setEditingGold(false);
  };

  return (
    <div className="backpack_container inventory_background">
      <div className="strength_box">
        <h4>STR</h4>
        <p>{strength_box}</p>
      </div>
      <div className="carrying-weight">
        <h4>TOTAL</h4>
        <p>{carrying_weight.toFixed(1)}</p>
      </div>
      <p className="weightCheck">{weightCheck(carrying_weight)}</p>
      <div className="weight_box">
        <div className="weightless_box">
          <p>{weightless_box}</p>
        </div>
        <div className="little_heavy_box">
          <p>{little_heavy_box}</p>
        </div>
        <div className="very_heavy_box">
          <p>{very_heavy_box}</p>
        </div>
        <div className="total_weight_box">
          <p>{total_weight_box}</p>
        </div>
      </div>

      <div className="gold_box">
        {editingGold ? (
          <input
            autoFocus
            value={editingGoldValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSaveGold();
                setEditingGold(false);
                fetchAll();
              }
            }}
            onChange={(e) => setEditingGoldValue(Number(e.target.value))}
            onBlur={() => setEditingGold(false)}
          />
        ) : (
          <p
            onDoubleClick={() => {
              setEditingGold(true);
            }}
          >
            {gold_box}
          </p>
        )}
        <img
          src="/assets/coins.png"
          alt="gold"
          width={20}
        />
      </div>
    </div>
  );
};

export default Backpack;
