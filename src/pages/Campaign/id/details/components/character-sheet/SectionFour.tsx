import { t } from "i18next";
import { useCharSheetContext } from "./CharSheetContext";
import "./SectionFour.css";

const SectionFour = () => {
  const { charSheetData, setCharSheetData } = useCharSheetContext();
  return (
    <div>
      <div className="last_session">
        <div className="onest">
          <textarea
            cols={30}
            rows={10}
            value={charSheetData.otherProfsAndLangs}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                otherProfsAndLangs: e.target.value,
              })
            }
          />
          <p>
            <b>{t("CHAR_SHEET_OTHER_PROFICIENCIES")}</b>
          </p>
        </div>
        <div className="twond">
          <textarea
            cols={30}
            rows={10}
            value={charSheetData.equipmentAndNotes}
            onChange={(e) =>
              setCharSheetData({
                ...charSheetData,
                equipmentAndNotes: e.target.value,
              })
            }
          />
          <p>
            <b>{t("CHAR_SHEET_EQUIPMENT")}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
