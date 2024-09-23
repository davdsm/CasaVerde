
import React, { useEffect, useState } from "react";
import GreenLogo from "../../assets/logo/logo-green.svg?react";
import NavigationLink from "./NavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { navigationLinks } from "./navigation-links";

import "../../styles/components/Header.scss";

const Header: React.FunctionComponent = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    openMobileMenu && (body.style.overflow = "hidden");
    !openMobileMenu && (body.style.overflow = "scroll");
  }, [openMobileMenu]);

  return (
    <React.Fragment>
      { openMobileMenu ?
        <div id="mobile-header">
          <button className="close-mobile-menu" onClick={() => setOpenMobileMenu(!openMobileMenu) } >
            <FontAwesomeIcon icon={faXmark} fontSize={"30px"} />
          </button>
          { navigationLinks.map((navigationLink) => 
            <NavigationLink 
              key={navigationLink.id} 
              onClickCallback={() => setOpenMobileMenu(!openMobileMenu)} 
              {...navigationLink}
            />
          )}
        </div> :
        <div id="header" className="header">
          <div className="container">
            <GreenLogo />
            <div className="navigation-links">
              { navigationLinks.map((navigationLink) => <NavigationLink key={navigationLink.id} {...navigationLink} />) }
            </div>
            <button className="mobile-menu" onClick={() => setOpenMobileMenu(!openMobileMenu) } >
              <FontAwesomeIcon icon={faBars} fontSize={"30px"} />
            </button>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default Header;
