import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DetailsContext } from "../../../../context/DetailsContext";

interface MoreItemOptionsProps {
  deleteFunc: () => void;
  sendToFunc: (playerId: string) => void;
  reverse: boolean;
}

const MoreItemOptions: React.FC<MoreItemOptionsProps> = ({
  deleteFunc,
  sendToFunc,
  reverse,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [sendToOpen, setSendToOpen] = useState<boolean>(false);
  const { selectedData, catTab } = useContext(DetailsContext);

  const otherPlayerIds = Object.keys(
    selectedData?.categories?.[catTab.categoryId]?.tabs ?? {}
  );

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
    <div className="relative">
      <div
        className="delete-item cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={menuRef}
      >
        <img
          src="/assets/three-dots.png"
          alt="more"
          height={18}
        />
      </div>
      {isOpen && (
        <div
          className="item-options"
          style={reverse ? { top: "unset", bottom: 0 } : {}}
          ref={menuRef}
        >
          <ul>
            <li onClick={deleteFunc}>{t("DELETE_BTN")}</li>
            <li
              className="relative"
              onClick={() => setSendToOpen((prev) => !prev)}
            >
              {t("SEND_TO")}
              <img
                className="show-more-arrow"
                src="/assets/arrow.svg"
                height={16}
                style={sendToOpen ? { transform: "rotate(180deg)" } : {}}
              />
            </li>
            {sendToOpen && (
              <>
                {otherPlayerIds.map((playerId) => {
                  if (playerId === catTab.tabId) return null;
                  const playerName =
                    selectedData?.categories?.[catTab.categoryId]?.tabs?.[
                      playerId
                    ]?.name ?? "";
                  return (
                    <li
                      key={playerId}
                      onClick={() => sendToFunc(playerId)}
                    >
                      <p className="ml-10">{playerName}</p>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreItemOptions;
