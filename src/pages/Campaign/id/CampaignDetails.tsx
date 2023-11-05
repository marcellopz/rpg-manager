import { useParams } from "react-router-dom";

export default function CampaignDetails() {
  const { id } = useParams();
  return <div>CampaignDetails {id}</div>;
}
