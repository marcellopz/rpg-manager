import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CharSheetType } from "./CharSheetType";
import { useCharSheetContext } from "./CharSheetContext";

function BonusBox({
  skillName,
}: {
  skillName: keyof CharSheetType["proficiencies"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { charSheetData, setCharSheetData } = useCharSheetContext();
  const [bonusValue, setBonusValue] = useState<number>(
    charSheetData.bonus?.[skillName] ?? 0
  );

  useEffect(() => {
    setCharSheetData(
      (prev) =>
        ({
          ...prev,
          bonus: {
            ...prev.bonus,
            [skillName]: bonusValue,
          },
        } as CharSheetType)
    );
  }, [bonusValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bonus-box">
      <img
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        src="/assets/three-dots.png"
        alt="more"
      />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="bonus-box-popover"
          ref={menuRef}
        >
          <p>Bonus</p>
          <div>
            <button
              onClick={() => {
                setBonusValue(bonusValue - 1);
              }}
            >
              -
            </button>
            <input
              size={1}
              value={bonusValue}
              onChange={(e) => {
                setBonusValue(parseInt(e.target.value));
              }}
            />
            <button
              onClick={() => {
                setBonusValue(bonusValue + 1);
              }}
            >
              +
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default BonusBox;
