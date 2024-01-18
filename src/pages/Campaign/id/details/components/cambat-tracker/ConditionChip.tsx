const ConditionChip = ({
  title,
  number,
  onClose,
  color,
  indefinite,
}: {
  title: string;
  number: number;
  color: string;
  onClose: () => void;
  indefinite: boolean;
}) => {
  return (
    <div
      className="chip"
      style={{ backgroundColor: color }}
    >
      <span
        onClick={onClose}
        className="closeButton"
      >
        ✖
      </span>
      <span className="title">{title}</span>
      {!indefinite && (
        <span className="number">{Number.isNaN(number) ? 0 : number}</span>
      )}
    </div>
  );
};

export default ConditionChip;
