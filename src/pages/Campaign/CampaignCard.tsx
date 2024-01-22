import React from "react";
import { Link } from "react-router-dom";

interface CampaignCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  id: string;
  isDemo?: boolean;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  imageSrc,
  title,
  description,
  id,
  isDemo,
}) => {
  return (
    <Link to={isDemo ? `/demo-campaign/${id}` : `/campaign/${id}/${title}`}>
      <div className="campaign__card">
        <div
          className="card-image"
          style={{
            backgroundImage: imageSrc
              ? `url(${imageSrc})`
              : "url(https://i.imgur.com/vngQgSh.png)",
          }}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5
            className="card-text"
            style={{
              textAlign: description.length > 100 ? "justify" : "center",
            }}
          >
            {description}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
