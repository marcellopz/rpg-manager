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
      <div className="tracker-table-name">Name</div>
      {isCombatDm && (
        <>
          <span className="separator" />
          <div className="tracker-table-ac">AC</div>
          <span className="separator" />
          <div className="tracker-table-hp">HP</div>
        </>
      )}
      <span className="separator" />
      <div
        className="tracker-table-reaction"
        title="Used reaction?"
      >
        Reaction
      </div>
    </div>
  );
}

export default COmbatTrackerTableHeader;
