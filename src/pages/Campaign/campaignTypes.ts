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
}

export interface CategoryType {
  name: string;
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

export interface TabType {
  name: string;
  type: string;
  content: string | InventoryContent;
}

export interface InventoryContent {
  playerName: string;
  playerAvatar: string;
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
  type: "normal" | "magic" | "consummable";
}
