import { useParams } from "react-router-dom";
import "./campaign.css";
import CampaignList from "./CampaignList";
import CampaignDetails from "./id/CampaignDetails";
import DetailsProvider from "./context/DetailsContext";

export default function CampaignApp() {
  const { id } = useParams();
  if (!id) {
    document.title = "RPG Manager";
    return <CampaignList />;
  }

  return (
    <DetailsProvider>
      <CampaignDetails />
    </DetailsProvider>
  );
}
