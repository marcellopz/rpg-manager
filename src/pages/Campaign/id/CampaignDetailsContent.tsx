import TextDetails from "./details/TextDetails";

interface CampaignDetailsContentProps {
  content: string | undefined
}

export default function CampaignDetailsContent({
  content
}: CampaignDetailsContentProps) {
  return <div className="tab-content">
    <TextDetails content={content || ""} />
  </div>;
}
