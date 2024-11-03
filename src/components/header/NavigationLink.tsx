import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import NavigationMenu from "./NavigationMenu";

import "../../styles/components/Header.scss";

interface INavigationLink {
    href: string; 
    id: string; 
    text: string;
    childNavigationLinks?: {
        href: string;
        id: string;
        text: string;
    }[];
    onClickCallback?: () => void;
  }

const NavigationLink: React.FunctionComponent<INavigationLink> = ({ href, id, text, childNavigationLinks, onClickCallback }) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const location = useLocation();
    const intl = useIntl();

    useEffect(() => {
        setIsActive(isNavigationLinkEqualToCurrentPage());
    }, [location.pathname]);

    const getCurrentPageURL = () => {
        return location.pathname.startsWith("/spaces") ? "/spaces" : location.pathname;
    };

    const isNavigationLinkEqualToCurrentPage = () => {
        return getCurrentPageURL() === href;
    };

    const onNavigate = () => {
        onClickCallback && onClickCallback();
    }

    return (
        <React.Fragment>
            { childNavigationLinks ? 
                <NavigationMenu href={href} id={id} text={text} childNavigationLinks={childNavigationLinks} onClickCallback={onClickCallback} />
                :
                <a id={id} href={href} className="navigation-link" style={isActive ? { color: "#008D36" } : undefined} onClick={() => onNavigate()} >
                    {intl.formatMessage({ id: text })}
                </a>
            }
        </React.Fragment>
    )
}

export default NavigationLink;
