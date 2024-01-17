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
  combat?: CombatType;
}

export interface CombatType {
  dmId: string;
  dmName: string;
  active: boolean;
  turn: number;
  round: number;
  currentTurn: string;
  turnOrder: string[];
  combatants: {
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
  type: "player" | "enemy" | "ally";
  orderIndex?: number;
  isTurn: boolean;
  activeEffects?: {
    [key: string]: ActiveEffectType;
  };
}

export interface ActiveEffectType {
  name: string;
  description: string;
  duration: number;
  durationRemaining: number;
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
  author: string;
}

export interface TabType {
  name: string;
  type: string;
  listIndex?: number;
  content: string | InventoryContent | CharSheetType;
  contentHistory?: ContentHistoryType<
    string | InventoryContent | CharSheetType
  >[];
}

export interface InventoryContent {
  playerName: string;
  playerStrength: number;
  playerAvatar: string;
  playerGold: number;
  inventory: {
    [key: string]: InventoryItemType;
  };
}

export interface InventoryItemType {
  numberOfItems: number;
  item: ItemType;
}

export interface ItemType {
  weight: number;
  name: string;
  type: "normal" | "magic" | "consumable";
}
