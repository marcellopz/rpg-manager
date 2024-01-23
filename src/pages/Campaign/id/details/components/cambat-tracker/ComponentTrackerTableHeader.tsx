import { t } from "i18next";

function COmbatTrackerTableHeader({ isCombatDm }: { isCombatDm: boolean }) {
  return (
    <div className="tracker-table-header">
      <div
        className="tracker-table-initiative"
        title="Initiative"
      >
        Init
      </div>
      <span className="separator" />
      <div className="tracker-table-name">{t("NAME")}</div>
      {isCombatDm && (
        <>
          <span className="separator" />
          <div className="tracker-table-ac">{t("COMBAT_AC")}</div>
          <span className="separator" />
          <div className="tracker-table-hp">{t("COMBAT_HP")}</div>
        </>
      )}
      <span className="separator" />
      <div
        className="tracker-table-reaction"
        title="Used reaction?"
      >
        {t("COMBAT_REACTION")}
      </div>
    </div>
  );
}

export default COmbatTrackerTableHeader;
