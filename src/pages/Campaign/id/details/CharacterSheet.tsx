import { useState } from "react";
import {
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./components/character-sheet";
import "./components/character-sheet/char-sheet.css";
import {
  CharSheetContextProvider,
  useCharSheetContext,
} from "./components/character-sheet/CharSheetContext";
import { CharSheetType } from "./components/character-sheet/CharSheetType";

const SaveLoadButtons = () => {
  const { saveCharSheet, loadCharSheet } = useCharSheetContext();
  return (
    <>
      <button onClick={saveCharSheet}>💾</button>
      <button onClick={loadCharSheet}>🔄</button>
    </>
  );
};

type CharacterSheetProps = {
  content: CharSheetType;
};

export default function CharacterSheet({ content }: CharacterSheetProps) {
  const [zoom, setZoom] = useState(100);
  return (
    <CharSheetContextProvider content={content}>
      <div className="char-sheet-container">
        <div className="char-sheet-toolbar">
          <SaveLoadButtons />
          <div className="zoom-handler flex">
            <p>🔍</p>
            <button onClick={() => setZoom((prev) => prev + 10)}>+</button>
            <input
              type="text"
              value={`${zoom}%`}
              onChange={(e) =>
                setZoom(parseInt(e.target.value.replace(/%/g, "")))
              }
            />
            <button
              onClick={() => setZoom((prev) => prev - 10)}
              disabled={zoom === 0}
            >
              -
            </button>
          </div>
        </div>
        <div
          className="char-sheet-wrapper"
          style={{ height: `${780 * (zoom / 100) + 50}px` }}
        >
          <div
            className="char-sheet"
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top left",
            }}
          >
            <SectionOne />
            <div className="flex">
              <SectionTwo />
              <SectionThree />
              <SectionFour />
            </div>
          </div>
        </div>
      </div>
    </CharSheetContextProvider>
  );
}
