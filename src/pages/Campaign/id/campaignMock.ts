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
  content: string;
}

const playerMock: PlayerType = {
  id: "player123",
  name: "Maxwell Edison",
  avatar: "maxwell_avatar.jpg",
  categories: [
    {
      id: 0,
      name: "Strategy Games",
      tabs: [
        {
          id: 0,
          name: "Game Mechanics",
          type: "video",
          content: "game_mechanics_video.mp4"
        },
        {
          id: 1,
          name: "Advanced Strategies",
          type: "text",
          content: "Detailed text about advanced strategies in strategy games."
        },
        {
          id: 2,
          name: "Pro Tips",
          type: "image",
          content: "pro_tips_image.jpg"
        }
      ]
    },
    {
      id: 1,
      name: "Role Playing",
      tabs: [
        {
          id: 0,
          name: "Character Building",
          type: "text",
          content: "Guide on how to build a strong character."
        },
        {
          id: 1,
          name: "World Lore",
          type: "audio",
          content: "world_lore_podcast.mp3"
        }
      ]
    },
    {
      id: 2,
      name: "Arcade",
      tabs: [
        {
          id: 0,
          name: "High Scores",
          type: "text",
          content: "List of high scores and players."
        },
        {
          id: 1,
          name: "Game Reviews",
          type: "video",
          content: "game_reviews_video.mp4"
        }
      ]
    }
  ]
};

const campaignMock: CampaignType = {
  players: [
  ],
  config: {
    difficulty: "Expert",
    timeLimit: "4 hours",
    region: "Global",
    language: "English"
  },
  categories: [
    {
      id: 0,
      name: "Strategy",
      tabs: [
        {
          id: 0,
          name: "Game Mechanics",
          type: "video",
          content: "game_mechanics_video.mp4"
        },
        {
          id: 1,
          name: "Expert Talks",
          type: "audio",
          content: "expert_talks_podcast.mp3"
        },
        {
          id: 2,
          name: "Pro Tips",
          type: "image",
          content: "pro_tips_image.jpg"
        },
        {
          id: 3,
          name: "Game Reviews",
          type: "video",
          content: "game_reviews_video.mp4"
        },
        {
          id: 4,
          name: "Strategy Guides",
          type: "text",
          content: "Text on how to play strategy games."
        },
        {
          id: 5,
          name: "Strategy Maps",
          type: "image",
          content: "strategy_maps.jpg"
        }
      ]
    },
    {
      id: 1,
      name: "Adventure Quests",
      tabs: [
        {
          id: 0,
          name: "Quest Maps",
          type: "image",
          content: "quest_maps.jpg"
        },
        {
          id: 1,
          name: "Survival Guides",
          type: "text",
          content: "Text on how to survive adventure quests."
        }
      ]
    },
    {
      id: 2,
      name: "Trivia Challenge",
      tabs: [
        {
          id: 0,
          name: "Question Bank",
          type: "text",
          content: "A large database of trivia questions."
        },
        {
          id: 1,
          name: "Scoreboard",
          type: "text",
          content: "Latest scoreboard of trivia challenges."
        }
      ]
    },
    {
      id: 3,
      name: "Arcade",
      tabs: [
        {
          id: 0,
          name: "High Scores",
          type: "text",
          content: "List of high scores and players."
        },
        {
          id: 1,
          name: "Game Reviews",
          type: "video",
          content: "game_reviews_video.mp4"
        }
      ]
    }
  ],
  backdropImage: "campaign_backdrop.jpg"
};

export { playerMock };

export default campaignMock;
