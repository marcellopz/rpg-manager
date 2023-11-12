interface CampaignDetailsContentProps {
  content: string | undefined
}

export default function CampaignDetailsContent({
  content
}: CampaignDetailsContentProps) {
  console.log(content);
  return <div className="tab-content">{content}</div>;
}
