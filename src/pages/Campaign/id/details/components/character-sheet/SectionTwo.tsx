import { t } from "i18next";
import { useCharSheetContext } from "./CharSheetContext";
import "./SectionTwo.css";

const attributes: {
  label: string;
  key:
    | "strength"
    | "dexterity"
    | "constitution"
    | "intelligence"
    | "wisdom"
    | "charisma";
}[] = [
  { label: "CHAR_SHEET_STRENGTH", key: "strength" },
  { label: "CHAR_SHEET_DEXTERITY", key: "dexterity" },
  { label: "CHAR_SHEET_CONSTITUTION", key: "constitution" },
  { label: "CHAR_SHEET_INTELLIGENCE", key: "intelligence" },
  { label: "CHAR_SHEET_WISDOM", key: "wisdom" },
  { label: "CHAR_SHEET_CHARISMA", key: "charisma" },
];

const convertToModifier = (value: number) => {
  if (value === 1) return -5;
  if (value === 2 || value === 3) return -4;
  if (value === 4 || value === 5) return -3;
  if (value === 6 || value === 7) return -2;
  if (value === 8 || value === 9) return -1;
  if (value === 10 || value === 11) return 0;
  if (value === 12 || value === 13) return 1;
  if (value === 14 || value === 15) return 2;
  if (value === 16 || value === 17) return 3;
  if (value === 18 || value === 19) return 4;
  if (value === 20 || value === 21) return 5;
  if (value === 22 || value === 23) return 6;
  if (value === 24 || value === 25) return 7;
  if (value === 26 || value === 27) return 8;
  if (value === 28 || value === 29) return 9;
  if (value === 30) return 10;
  return 0;
};

const SectionTwo = () => {
  const { charSheetData, setCharSheetData } = useCharSheetContext();
  return (
    <div>
      <div className="proficiency_and_inspiration_container">
        <div className="proficiency">
          <input
            type="number"
            name="proficiencia"
            value={charSheetData.proficiencyBonus}
            onChange={(e) => {
              setCharSheetData((prev) => ({
                ...prev,
                proficiencyBonus: parseInt(e.target.value ?? 0),
              }));
            }}
            maxLength={2}
          />
          <div>
            <p>{t("CHAR_SHEET_PROFICIENCY_BONUS")}</p>
          </div>
        </div>
        <div className="inspiration">
          <input
            type="text"
            name="inspiration"
            value={charSheetData.inspiration}
            onChange={(e) => {
              setCharSheetData((prev) => ({
                ...prev,
                inspiration: e.target.value,
              }));
            }}
            maxLength={1}
          />
          <div>
            <p>{t("CHAR_SHEET_INSPIRATION")}</p>
          </div>
        </div>

        <div className="all_attributes_container">
          <div className="stats">
            {attributes.map((atributo) => (
              <div
                className="stats_container"
                key={atributo.key}
              >
                <input
                  type="number"
                  name=""
                  id=""
                  value={charSheetData[atributo.key]}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      [atributo.key]: parseInt(e.target.value),
                    }));
                  }}
                  className="text_1"
                  maxLength={2}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  value={convertToModifier(charSheetData[atributo.key])}
                  readOnly
                  className="text_2"
                  maxLength={2}
                />
                <p>{t(atributo.label)}</p>
              </div>
            ))}
          </div>

          <div className="proficiencies_container">
            <div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.strength}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        strength: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  readOnly
                  value={
                    convertToModifier(charSheetData.strength) +
                    (charSheetData.proficiencies.strength
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                  maxLength={2}
                />
                <p>{t("CHAR_SHEET_SAVING_THROWS")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.atletics}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        atletics: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.strength) +
                    (charSheetData.proficiencies.atletics
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_ATLETHICS")}</p>
              </div>
            </div>
            <div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.dexterity}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        dexterity: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.dexterity) +
                    (charSheetData.proficiencies.dexterity
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SAVING_THROWS")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.acrobatics}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        acrobatics: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.dexterity) +
                    (charSheetData.proficiencies.acrobatics
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_ACROBATICS")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.stealth}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        stealth: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.dexterity) +
                    (charSheetData.proficiencies.stealth
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_STEALTH")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.sleightOfHand}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        sleightOfHand: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.dexterity) +
                    (charSheetData.proficiencies.sleightOfHand
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SLEIGHT_OF_HAND")}</p>
              </div>
            </div>
            <div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.constitution}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        constitution: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.constitution) +
                    (charSheetData.proficiencies.constitution
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SAVING_THROWS")}</p>
              </div>
            </div>
            <div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.intelligence}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        intelligence: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.intelligence) +
                    (charSheetData.proficiencies.intelligence
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SAVING_THROWS")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.arcana}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        arcana: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.intelligence) +
                    (charSheetData.proficiencies.arcana
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_ARCANA")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.history}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        history: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.intelligence) +
                    (charSheetData.proficiencies.history
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_HISTORY")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.investigation}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        investigation: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.intelligence) +
                    (charSheetData.proficiencies.investigation
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_INVESTIGATION")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.nature}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        nature: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.intelligence) +
                    (charSheetData.proficiencies.nature
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_NATURE")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.religion}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        religion: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.intelligence) +
                    (charSheetData.proficiencies.religion
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_RELIGION")}</p>
              </div>
            </div>
            <div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.wisdom}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        wisdom: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.wisdom) +
                    (charSheetData.proficiencies.wisdom
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SAVING_THROWS")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.animalHandling}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        animalHandling: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.wisdom) +
                    (charSheetData.proficiencies.animalHandling
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_ANIMAL_HANDLING")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.insight}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        insight: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.wisdom) +
                    (charSheetData.proficiencies.insight
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_INSIGHT")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.medicine}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        medicine: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.wisdom) +
                    (charSheetData.proficiencies.medicine
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_MEDICINE")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.perception}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        perception: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.wisdom) +
                    (charSheetData.proficiencies.perception
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_PERCEPTION")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.survival}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        survival: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.wisdom) +
                    (charSheetData.proficiencies.survival
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SURVIVAL")}</p>
              </div>
            </div>
            <div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.charisma}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        charisma: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.charisma) +
                    (charSheetData.proficiencies.charisma
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_SAVING_THROWS")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.deception}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        deception: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.charisma) +
                    (charSheetData.proficiencies.deception
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_DECEPTION")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.intimidation}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        intimidation: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.charisma) +
                    (charSheetData.proficiencies.intimidation
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_INTIMIDATION")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.performance}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        performance: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.charisma) +
                    (charSheetData.proficiencies.performance
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_PERFORMANCE")}</p>
              </div>
              <div className="mini_container">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={charSheetData.proficiencies.persuasion}
                  onChange={(e) => {
                    setCharSheetData((prev) => ({
                      ...prev,
                      proficiencies: {
                        ...prev.proficiencies,
                        persuasion: e.target.checked,
                      },
                    }));
                  }}
                />
                <input
                  type="text"
                  name="text"
                  className="alt"
                  maxLength={2}
                  readOnly
                  value={
                    convertToModifier(charSheetData.charisma) +
                    (charSheetData.proficiencies.persuasion
                      ? charSheetData.proficiencyBonus
                      : 0)
                  }
                />
                <p>{t("CHAR_SHEET_PERSUASION")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
