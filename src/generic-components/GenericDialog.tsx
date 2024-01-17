type Props = {
  open: boolean;
  onClose: () => void;
};

const GenericDialog = ({ open, onClose }: Props) => {
  if (!open) {
    return null;
  }

  return (
    <>
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
          xd
        </div>
      </div>
    </>
  );
};

export default GenericDialog;
