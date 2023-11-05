import { useParams } from "react-router-dom";
import "./campaign.css";
import CampaignList from "./CampaignList";
import CampaignDetails from "./id/CampaignDetails";

export default function CampaignApp() {
  const { id } = useParams();
  if (!id) {
    return <CampaignList />;
  }
  return <CampaignDetails />;
}
