import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

import "../../styles/components/Header.scss";

interface INavigationMenu {
    href: string; 
    id: string; 
    text: string;
    childNavigationLinks: {
        href: string;
        id: string;
        text: string;
    }[];
    onClickCallback?: () => void;
  }

const NavigationMenu: React.FunctionComponent<INavigationMenu> = ({ href, id, text, childNavigationLinks, onClickCallback }) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [isChildActive, setIsChildActive] = useState<{ [key: string]: boolean }>();
    const location = useLocation();
    const intl = useIntl();

    useEffect(() => {
        setIsActive(isNavigationLinkEqualToCurrentPage());

        const childs: { [key: string]: boolean } = {};
        childNavigationLinks.forEach(({ id: childId, href: childHref }) => ( childs[childId] = isChildNavigationLinkEqualToCurrentPage(childHref) ));
        setIsChildActive(() => ({...childs}));

    }, [location.pathname]);

    const getCurrentPageURL = () => {
        return location.pathname.startsWith("/spaces") ? "/spaces" : location.pathname;
    };

    const isNavigationLinkEqualToCurrentPage = () => {
        return getCurrentPageURL() === href;
    };

    const isChildNavigationLinkEqualToCurrentPage = (childHref: string) => {
        return location.pathname.startsWith(childHref);
    };

    const onNavigate = () => {
        onClickCallback && onClickCallback();
    }

    return (
        <div className="dropdown">
            {/* <button class="dropbtn">Dropdown</button> */}
            <a id={id} href={href} className="navigation-link" style={isActive ? { color: "#008D36" } : undefined} onClick={() => onNavigate()} >
                {intl.formatMessage({ id: text })}
            </a>
            <div className="dropdown-menu">
                <div className="dropdown-content">
                    { childNavigationLinks &&
                        childNavigationLinks.map(({ href: childHref, id: childId, text: childText }) => 
                            <a key={childId} href={childHref} id={childId} className="navigation-link" style={isChildActive && isChildActive[childId] ? { color: "#008D36" } : undefined} onClick={() => onNavigate()} >
                                {intl.formatMessage({ id: childText })}
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu;
