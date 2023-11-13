import { useTranslation } from "react-i18next";
import CampaignCard from "./CampaignCard";
import "./campaign.css";

const campaigns = [
  {
    title: "Campanha 1",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imageSrc: "https://i.imgur.com/oHFZUY7.png",
    id: 1,
  },
  {
    title: "Campanha 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageSrc: "https://i.imgur.com/j5ipgUs.png",
    id: 10,
  },
  {
    title: "Campanha 3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    imageSrc: "https://i.imgur.com/0OAhA13.png",
    id: 11,
  },
  {
    title: "Campanha 4",
    description: "Descrição",
    imageSrc: "https://i.imgur.com/4hUcbLk.png",
    id: 12,
  },
  {
    title: "Campanha 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/2fodLSV.png",
    id: 174,
  },
  {
    title: "Campanha 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/jD0UWS5.png",
    id: 100,
  },
  {
    title: "Campanha 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/94qF1lb.png",
    id: 17,
  },
  {
    title: "Campanha 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/lLFwam1.png",
    id: 18,
  },
  {
    title: "Campanha 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/UzgXOlV.png",
    id: 19,
  },
  {
    title: "Campanha 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/8O31ZsL.png",
    id: 20,
  },
  {
    title: "Campanha 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vel sapien.",
    imageSrc: "https://i.imgur.com/vngQgSh.png",
    id: 21,
  },
];

export default function CampaignList() {
  const { t } = useTranslation();
  return (
    <div className="campaign">
      <section className="campaign__header header_inset">
        <div className="campaign__backdrop">
          <h1>{t('CAMPAIGN_TITLE')}</h1>
          <div>
            <button>{t('CAMPAIGN_NEW')}</button>
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
