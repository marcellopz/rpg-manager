import TextDetails from "./details/TextDetails";

interface CampaignDetailsContentProps {
  content: string | undefined
}

export default function CampaignDetailsContent({
  content
}: CampaignDetailsContentProps) {
  return <div className="tab-content" data-color-mode="light">
    <TextDetails content={content || ""} />
  </div>;
}
