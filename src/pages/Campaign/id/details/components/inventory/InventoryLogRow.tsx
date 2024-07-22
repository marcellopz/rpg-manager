import { useState } from "react";
import { InventoryChangeType } from "../../../../campaignTypes";

// | "add"
// | "delete"
// | "update_gold"
// | "update_silver"
// | "update_copper"
// | "update_strength"
// | "update_weight"
// | "update_number_of_items"
// | "update_item_name"
// | "update_item_type"
// | "update_char_image";

function getLogEmoji(log: InventoryChangeType) {
  switch (log.changeType) {
    case "add":
      return "🆕";
    case "delete":
      return "⛔";
    case "update_gold":
      return "🥇";
    case "update_silver":
      return "🥈";
    case "update_copper":
      return "🥉";
    case "update_strength":
      return "💪";
    case "update_weight":
      return "🏋️";
    case "update_number_of_items":
      return "🔢";
    case "update_item_name":
      return "🏷️";
    case "update_item_type":
      return "📦";
    case "update_char_image":
      return "📷";
  }
}

function InventoryChangeDetails({ log }: { log: InventoryChangeType }) {
  if (log.item) {
    return (
      <pre className="past-version-content">
        {JSON.stringify(log.item, null, 2)}
      </pre>
    );
  }
  return null;
}

function InventoryLogRow({ log }: { log: InventoryChangeType }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  return (
    <div className="inventory-log-row-wrapper">
      <div
        className="inventory-log-row"
        style={{
          borderRadius: detailsOpen ? "5px 5px 0 0" : "5px",
        }}
        onClick={() => {
          setDetailsOpen((prev) => !prev);
        }}
      >
        <span>
          <p className="log-description">
            {getLogEmoji(log)}
            {log.description}
          </p>
          <p className="log-time">{new Date(log.timestamp).toString()}</p>
        </span>

        <img
          id="toggle-arrow"
          src="/assets/arrow.svg"
          style={{
            userSelect: "none",
            transition: "transform 0.1s",
            transform: detailsOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {detailsOpen && (
        <div className="inventory-log-row-details">
          <p>
            <b>Author:</b> {log.username}
          </p>
          <InventoryChangeDetails log={log} />
        </div>
      )}
    </div>
  );
}

export default InventoryLogRow;
