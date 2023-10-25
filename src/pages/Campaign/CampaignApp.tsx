import React from "react";
import CampaignCard from "./CampaignCard";
import "./Campaign.css";

const campaigns = [
  {
    title: "Campanha 1",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imageSrc: "src/assets/background/1.png",
    id: 1,
  },
  {
    title: "Campanha 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageSrc: "src/assets/background/2.png",
    id: 10,
  },
  {
    title: "Campanha 3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    imageSrc: "src/assets/background/3.png",
    id: 11,
  },
  {
    title: "Campanha 4",
    description: "Descrição",
    imageSrc: "src/assets/background/5.png",
    id: 12,
  },
  {
    title: "Campanha 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "src/assets/background/1.png",
    id: 174,
  },
  {
    title: "Campanha 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "src/assets/background/2.png",
    id: 100,
  },
  {
    title: "Campanha 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "src/assets/background/3.png",
    id: 17,
  },
  {
    title: "Campanha 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "src/assets/background/5.png",
    id: 18,
  },
];

export default function CampaignApp() {
  return (
    <div className="campaign">
      <section className="campaign__header header_inset">
        <div className="campaign__backdrop">
          <h1>Campanhas</h1>
          <div>
            <button>Criar campanha</button>
          </div>
        </div>
      </section>
      <section className="cards__section">
        <div className="campaign__cards">
          {campaigns.map((campaign) => (
            <CampaignCard
              description={campaign.description}
              title={campaign.title}
              imageSrc={campaign.imageSrc}
              id={campaign.id}
              key={campaign.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
