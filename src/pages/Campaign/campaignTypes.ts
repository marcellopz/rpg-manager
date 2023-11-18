export interface CampaignType {
  players: PlayerType[];
  config: any;
  categories: CategoryType[];
  backdropImage: string;
}

export interface CategoryType {
  id: number;
  name: string;
  tabs: TabType[];
}

export interface PlayerType {
  id: string;
  name: string;
  avatar: string;
  categories: CategoryType[];
}

export interface TabType {
  id: number;
  name: string;
  type: string;
  content: string | InventoryContent;
}

export interface InventoryContent {
    playerName: string;
    playerAvatar: string;
    inventory: InventoryItemType[];
}

export interface InventoryItemType {
    numberOfItems: number;
    item: ItemType;
}

export interface ItemType {
    weight: number;
    name: string;
    type: 'normal' | 'magic' | 'consummable';
}
