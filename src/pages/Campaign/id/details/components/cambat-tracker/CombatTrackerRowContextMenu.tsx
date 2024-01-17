import { useEffect, useRef } from "react";

const CombatTrackerRowContextMenu = ({
  x,
  y,
  onMenuSelect,
  open,
  onClose,
}: {
  onClose: () => void;
  open: boolean;
  x: number;
  y: number;
  onMenuSelect: (option: string) => void;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div
      className="context-menu"
      style={{
        top: y,
        left: x,
        position: "absolute",
      }}
      ref={menuRef}
    >
      <ul>
        <li
          onClick={() => {
            onMenuSelect("Option 1");
            onClose();
          }}
        >
          Add condition
        </li>
        <li
          onClick={() => {
            onMenuSelect("Option 2");
            onClose();
          }}
        >
          Edit
        </li>
        <li
          onClick={() => {
            onMenuSelect("Option 3");
            onClose();
          }}
        >
          Delete
        </li>
      </ul>
    </div>
  );
};

export default CombatTrackerRowContextMenu;
