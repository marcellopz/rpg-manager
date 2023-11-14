import React, { useEffect, useRef } from "react";

interface CampaignPublicPrivateDropdownProps {
    publicSelected: boolean;
    setPublicSelected: React.Dispatch<React.SetStateAction<boolean>>;
    hideSelection: boolean;
    handleHide: (e: React.MouseEvent) => void;
}

export default function CampaignPublicPrivateDropdown({ publicSelected, setPublicSelected, handleHide, hideSelection }: CampaignPublicPrivateDropdownProps) {
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

    return (
        <div className="public-private-container">
            <div className="public-private-selection cursor-pointer" onClick={() => setIsMenuOpen(prev => !prev)}>
                <div>
                    <strong>
                        {publicSelected ? "Public content" : "Private content"}
                    </strong>
                    <img src="/assets/arrow.svg" />
                </div>
                <p onClick={handleHide}>{hideSelection ? "show" : "hide"}</p>
            </div>
            {
                isMenuOpen && (
                    <div className="public-private-selection-dropdown" ref={menuRef}>
                        <div onClick={() => { setPublicSelected(true); setIsMenuOpen(false) }}>Public</div>
                        <div onClick={() => { setPublicSelected(false); setIsMenuOpen(false) }}>Private</div>
                    </div>
                )
            }
        </div >
    );
}