import { useState, useContext, useEffect } from "react";
import {
  updateCopper,
  updateGold,
  updateSilver,
  updateStrength,
} from "../../../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import { DetailsContext } from "../../../../context/DetailsContext";
import { t } from "i18next";

const Backpack = ({
  strength_box,
  weightless_box,
  little_heavy_box,
  very_heavy_box,
  total_weight_box,
  gold_box,
  silver_box,
  copper_box,
  carrying_weight,
}: {
  strength_box: number;
  weightless_box: number;
  little_heavy_box: number;
  very_heavy_box: number;
  total_weight_box: number;
  gold_box: number;
  silver_box: number;
  copper_box: number;
  carrying_weight: number;
}) => {
  const { id } = useParams();
  const { catTab, fetchAll, campaignDetails } = useContext(DetailsContext);
  const [editingGoldValue, setEditingGoldValue] = useState<number>(gold_box);
  const [editingGold, setEditingGold] = useState(false);
  const [editingSilverValue, setEditingSilverValue] =
    useState<number>(silver_box);
  const [editingSilver, setEditingSilver] = useState(false);
  const [editingCopperValue, setEditingCopperValue] =
    useState<number>(copper_box);
  const [editingCopper, setEditingCopper] = useState(false);
  const [editingStr, setEditingStr] = useState(false);
  const [editingStrValue, setEditingStrValue] = useState<number>(strength_box);

  const charName =
    campaignDetails?.categories?.[catTab.categoryId]?.tabs?.[catTab.tabId]
      ?.name ?? "";

  useEffect(() => {
    setEditingStrValue(strength_box);
  }, [strength_box]);

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
    updateGold(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      editingGoldValue,
      charName,
      gold_box
    );
    setEditingGold(false);
  };

  const handleSaveSilver = () => {
    updateSilver(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      editingSilverValue,
      charName,
      silver_box
    );
    setEditingGold(false);
  };

  const handleSaveCopper = () => {
    updateCopper(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      editingCopperValue,
      charName,
      copper_box
    );
    setEditingCopper(false);
  };

  const handleSaveStr = () => {
    updateStrength(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      editingStrValue,
      charName,
      strength_box
    );
    setEditingStr(false);
  };

  useEffect(() => {
    setEditingGoldValue(gold_box);
  }, [gold_box]);

  useEffect(() => {
    setEditingSilverValue(silver_box);
  }, [silver_box]);

  useEffect(() => {
    setEditingCopperValue(copper_box);
  }, [copper_box]);

  return (
    <div className="backpack_container inventory_background">
      <div className="strength_box">
        <h4>{t("BACKPACK_STR")}</h4>
        {editingStr ? (
          <input
            autoFocus
            value={editingStrValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSaveStr();
                setEditingStr(false);
                fetchAll();
              }
            }}
            onChange={(e) => setEditingStrValue(Number(e.target.value))}
            onBlur={() => setEditingStr(false)}
          />
        ) : (
          <p
            onDoubleClick={() => {
              setEditingStr(true);
            }}
          >
            {strength_box}
          </p>
        )}
      </div>
      <div className="carrying-weight">
        <h4>{t("BACKPACK_TOTAL")}</h4>
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

      <div className="money_container">
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
          <img src="/assets/coins.png" alt="gold" width={10} />
        </div>
        <div className="silver_box">
          {editingSilver ? (
            <input
              autoFocus
              value={editingSilverValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSaveSilver();
                  setEditingSilver(false);
                  fetchAll();
                }
              }}
              onChange={(e) => setEditingSilverValue(Number(e.target.value))}
              onBlur={() => setEditingSilver(false)}
            />
          ) : (
            <p
              onDoubleClick={() => {
                setEditingSilver(true);
              }}
            >
              {silver_box}
            </p>
          )}
          <img src="/assets/coins.png" alt="silver" width={10} />
        </div>
        <div className="copper_box">
          {editingCopper ? (
            <input
              autoFocus
              value={editingCopperValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSaveCopper();
                  setEditingCopper(false);
                  fetchAll();
                }
              }}
              onChange={(e) => setEditingCopperValue(Number(e.target.value))}
              onBlur={() => setEditingCopper(false)}
            />
          ) : (
            <p
              onDoubleClick={() => {
                setEditingCopper(true);
              }}
            >
              {copper_box}
            </p>
          )}
          <img src="/assets/coins.png" alt="copper" width={10} />
        </div>
      </div>
    </div>
  );
};

export default Backpack;
