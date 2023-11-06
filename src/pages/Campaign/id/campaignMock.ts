export interface CampaignType {
  players: PlayerType[];
  config: any;
  tabs: TabType[];
  backdropImage: string;
}

export interface PlayerType {
  id: string;
  name: string;
  avatar: string;
  tabs: TabType[];
}

export interface TabType {
  id: number;
  name: string;
  type: string;
  content: string;
}

const campaignMock = {
  players: [],
  config: {},
  tabs: [
    {
      id: 0,
      name: "Campanha",
      type: "text",
      content: "Lorem ipsum",
    },
    {
      id: 1,
      name: "Contexto geral",
      type: "text",
      content: "Lorem ipsum",
    },
    {
      id: 2,
      name: "Regras da mesa",
      type: "text",
      content: "Lorem ipsum2",
    },
    {
      id: 3,
      name: "Mapa",
      type: "map",
      content: "Lorem ipsum3",
    },
    {
      id: 4,
      name: "Inventário",
      type: "inventory",
      content: "Lorem ipsum4",
    },
    {
      id: 5,
      name: "Registros de sessão",
      type: "logs",
      content: "Lorem ipsum5",
    },
    {
      id: 6,
      name: "Personagens",
      type: "characters",
      content: "Lorem ipsum6",
    },
    {
      id: 7,
      name: "Missões",
      type: "missions",
      content: "Lorem ipsum7",
    },
  ],
  backdropImage: "https://picsum.photos/200/300",
};

const playerMock = {
  id: "1",
  name: "Player 1",
  avatar: "https://picsum.photos/200/300",
  tabs: [
    {
      id: 0,
      name: "ficha",
      type: "character",
      content: "Lorem ipsum",
    },
    {
      id: 1,
      name: "notas",
      type: "text",
      content: "Lorem ipsum",
    },
    {
      id: 2,
      name: "combates",
      type: "text",
      content: "Lorem ipsum",
    },
  ],
};

export { playerMock };

export default campaignMock;
