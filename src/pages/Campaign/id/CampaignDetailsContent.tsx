import { TabType } from "./campaignMock";

interface CampaignDetailsContentProps {
  tab: TabType;
}

export default function CampaignDetailsContent({
  tab,
}: CampaignDetailsContentProps) {
  console.log(tab);
  return <div className="tab-content">{tab.content}</div>;
}
