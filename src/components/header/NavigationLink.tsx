
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
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location.pathname]);

    const getCurrentPageURL = () => {
        return location.pathname.startsWith("/escritorios") ? "/escritorios" : location.pathname;
    };

    const isNavigationLinkEqualToCurrentPage = () => {
        return getCurrentPageURL() === href;
    };

    const onNavigate = () => {
        onClickCallback && onClickCallback();
        if ( isNavigationLinkEqualToCurrentPage() ) { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }
        else { navigate(href); }
    }

    return (
        <button id={id} className={`navigation-link ${ isActive ? "active" : ""}`} onClick={() => onNavigate()}>
            {text}
        </button>
    )
}

export default NavigationLink;
