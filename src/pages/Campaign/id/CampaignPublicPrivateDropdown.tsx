import React, { useEffect, useRef } from "react";

interface CampaignPublicPrivateDropdownProps {
    publicSelected: boolean;
    setPublicSelected: React.Dispatch<React.SetStateAction<boolean>>;
    hideSelection: boolean;
    handleHide: (e: React.MouseEvent) => void;
    resetCatTab: () => void;
}

export default function CampaignPublicPrivateDropdown({
    publicSelected,
    setPublicSelected,
    handleHide,
    hideSelection,
    resetCatTab
}: CampaignPublicPrivateDropdownProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelection = (pub: boolean) => {
        setPublicSelected(pub);
        setIsMenuOpen(false);
        resetCatTab();
    }

    return (
        <div className="public-private-container">
            <div className="public-private-selection cursor-pointer" onClick={() => setIsMenuOpen(prev => !prev)}>
                <div>
                    <strong>
                        {publicSelected ? "Public" : "Private"}
                    </strong>
                    <img src="/assets/arrow.svg" />
                </div>
                <p onClick={handleHide}>{hideSelection ? "show" : "hide"}</p>
            </div>
            {
                isMenuOpen && (
                    <div className="public-private-selection-dropdown" ref={menuRef}>
                        <div onClick={() => { handleSelection(true) }}>Public</div>
                        <div onClick={() => { handleSelection(false) }}>Private</div>
                    </div>
                )
            }
        </div >
    );
}