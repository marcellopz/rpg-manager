import { t } from "i18next";
import { useCharSheetContext } from "./CharSheetContext";
import "./SectionOne.css";

const SectionOne = () => {
  const { charSheetData, setCharSheetData } = useCharSheetContext();

  return (
    <div>
      <section>
        <div className="title_name">
          <input
            type="text"
            name="nome_do_personagem"
            value={charSheetData.charName}
            onChange={(e) => {
              setCharSheetData((prev) => ({
                ...prev,
                charName: e.target.value,
              }));
            }}
          />
          <p>{t("CHAR_SHEET_NAME")}</p>
        </div>
        <div className="container_player">
          <div className="player_information">
            <input
              type="text"
              name="class_and_level"
              value={charSheetData.classnLevel}
              onChange={(e) => {
                setCharSheetData((prev) => ({
                  ...prev,
                  classnLevel: e.target.value,
                }));
              }}
            />
            <p>
              <b>{t("CHAR_SHEET_CLASS_LEVEL")}</b>
            </p>
          </div>

          <div className="player_information">
            <input
              type="text"
              name="background"
              value={charSheetData.background}
              onChange={(e) => {
                setCharSheetData((prev) => ({
                  ...prev,
                  background: e.target.value,
                }));
              }}
            />
            <p>
              <b>{t("CHAR_SHEET_BACKGROUND")}</b>
            </p>
          </div>

          <div className="player_information">
            <input
              type="text"
              name="playerName"
              value={charSheetData.playerName}
              onChange={(e) => {
                setCharSheetData((prev) => ({
                  ...prev,
                  playerName: e.target.value,
                }));
              }}
            />
            <p>
              <b>{t("CHAR_SHEET_PLAYER_NAME")}</b>
            </p>
          </div>

          <div className="player_information">
            <input
              type="text"
              name="race"
              value={charSheetData.race}
              onChange={(e) => {
                setCharSheetData((prev) => ({
                  ...prev,
                  race: e.target.value,
                }));
              }}
            />
            <p>
              <b>{t("CHAR_SHEET_RACE")}</b>
            </p>
          </div>

          <div className="player_information">
            <input
              type="text"
              name="alignment"
              value={charSheetData.alignment}
              onChange={(e) => {
                setCharSheetData((prev) => ({
                  ...prev,
                  alignment: e.target.value,
                }));
              }}
            />
            <p>
              <b>{t("CHAR_SHEET_ALIGNMENT")}</b>
            </p>
          </div>

          <div className="player_information">
            <input
              type="text"
              name="experience_points"
              value={charSheetData.exp}
              onChange={(e) => {
                setCharSheetData((prev) => ({
                  ...prev,
                  exp: e.target.value,
                }));
              }}
            />
            <p>
              <b>{t("CHAR_SHEET_EXPERIENCE_POINTS")}</b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
