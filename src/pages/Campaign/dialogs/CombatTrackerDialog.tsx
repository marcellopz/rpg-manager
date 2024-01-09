import "./combat.css";

type CombatTrackerDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CombatTrackerDialog = ({ open, onClose }: CombatTrackerDialogProps) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className="dialog-background"
      onClick={onClose}
    >
      <div
        className="dialog relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="combat">
          <div className="combat-header">
            <h2>Combat Tracker</h2>
            <button onClick={onClose}>
              <img
                src="/assets/xclose.png"
                alt="Close"
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatTrackerDialog;
