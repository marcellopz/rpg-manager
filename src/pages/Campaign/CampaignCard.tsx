import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../../contexts/firebase/storage";

interface CampaignCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  id: string;
  isDemo?: boolean;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  description,
  id,
  isDemo,
}) => {
  useEffect(() => {
    getImage(`campaign/cardImage/${id}`).then((res) => {
      const blob = new Blob([res], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      const img = document.getElementById(
        `card-image-${id}`
      ) as HTMLImageElement;
      img.src = url;
      img.onload = () => {
        URL.revokeObjectURL(url);
      };
    });
  }, []);

  return (
    <Link to={isDemo ? `/demo-campaign/${id}` : `/campaign/${id}/${title}`}>
      <div className="campaign__card">
        <img
          className="card-image"
          id={`card-image-${id}`}
          src="https://i.imgur.com/nC8krIf.png"
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
