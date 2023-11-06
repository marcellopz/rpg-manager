import React from "react";
import { Link } from "react-router-dom";

interface CampaignCardProps {
  imageSrc: string;
  title: string;
  description: string;
  id: number;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  imageSrc,
  title,
  description,
  id,
}) => {
  return (
    <Link to={`/campaign/${id}/${title}`}>
      <div className="campaign__card">
        <img src={imageSrc} alt={title} width="100%" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-text">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
