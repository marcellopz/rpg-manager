import { InventoryContent } from "../../campaignTypes";

interface InventoryDetailsProps {
    content: InventoryContent;
}

export default function InventoryDetails({ content }: InventoryDetailsProps) {
    console.log(content);
    return (
        <div>xd</div>
    )
}
