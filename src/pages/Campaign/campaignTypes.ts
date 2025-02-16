import { CharSheetType } from "./id/details/components/character-sheet/CharSheetType";

export interface CampaignType {
  // id?: string;
  name: string;
  description: string;
  creatorId: string;
  players?: {
    [key: string]: PlayerType;
  };
  config?: any;
  categories?: {
    [key: string]: CategoryType;
  };
  backdropImage?: string;
  campaignCardImage?: string;
  combat?: CombatType;
  inventoryLog?: {
    [key: string]: InventoryChangeType;
  };
  playerList?: {
    [key: string]: {
      id: string;
      name: string;
    };
  };
}

export interface InventoryChangeType {
  timestamp: number;
  username: string;
  item?: InventoryItemType;
  changeType:
    | "add"
    | "delete"
    | "update_platinum"
    | "update_gold"
    | "update_silver"
    | "update_copper"
    | "update_strength"
    | "update_weight"
    | "update_number_of_items"
    | "update_item_name"
    | "update_item_type"
    | "update_char_image";
  description: string;
}

export interface CombatType {
  dmId: string;
  dmName: string;
  active: boolean;
  turn: number;
  round: number;
  dmNotes?: string;
  combatants?: {
    [key: string]: CombatantType;
  };
  // log: CombatLogType[];
}

export interface CombatantType {
  name: string;
  initiative: number;
  hp: number;
  maxHp: number;
  ac: number;
  avatar?: string;
  type: "player" | "enemy" | "ally" | "undead";
  orderIndex?: number;
  usedReaction?: boolean;
  id?: string;
  turnOrder?: number;
  visible?: boolean;
  nameHidden?: boolean;
  alias?: string;
  activeEffects?: {
    [key: string]: ActiveEffectType;
  };
}

export interface ActiveEffectType {
  name: string;
  duration: number;
  color: string;
}

export interface CategoryType {
  name: string;
  inventory?: boolean;
  listIndex?: number;
  tabs?: {
    [key: string]: TabType;
  };
}

export interface PlayerType {
  id: string;
  name: string;
  avatar: string;
  categories?: {
    [key: string]: CategoryType;
  };
}

export interface ContentHistoryType<T> {
  content: T;
  timestamp: number;
  author?: string;
}

export interface TabType {
  name: string;
  type: string;
  listIndex?: number;
  content: string | InventoryContent | CharSheetType;
  contentHistory?: {
    [key: string]: ContentHistoryType<
      string | InventoryContent | CharSheetType
    >;
  };
}

export interface InventoryContent {
  playerName: string;
  playerStrength: number;
  playerAvatar: string;
  playerGold: number;
  playerPlatinum?: number;
  playerSilver?: number;
  playerCopper?: number;
  inventory: {
    [key: string]: InventoryItemType;
  };
}

export interface InventoryItemType {
  orderIndex?: number;
  numberOfItems: number;
  item: ItemType;
}

export interface ItemType {
  weight: number;
  name: string;
  type: "normal" | "magic" | "consumable";
}
