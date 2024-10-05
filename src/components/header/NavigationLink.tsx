
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../../styles/components/Header.scss";

interface INavigationLink {
    href: string; 
    id: string; 
    text: string;
    onClickCallback?: () => void;
  }

const NavigationLink: React.FunctionComponent<INavigationLink> = ({ href, id, text, onClickCallback }) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsActive(isNavigationLinkEqualToCurrentPage());
    }, [location.pathname]);

    const getCurrentPageURL = () => {
        return location.pathname.startsWith("/offices") ? "/offices" : location.pathname;
    };

    const isNavigationLinkEqualToCurrentPage = () => {
        return getCurrentPageURL() === href;
    };

    const onNavigate = () => {
        onClickCallback && onClickCallback();
        if ( location.pathname === href ) { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }
        else { navigate(href); }
    }

    return (
        <button id={id} className="navigation-link" style={isActive ? { color: "#008D36" } : undefined} onClick={() => onNavigate()} >
            {text}
        </button>
    )
}

export default NavigationLink;
