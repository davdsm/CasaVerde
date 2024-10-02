
import React, { useEffect, useRef, useState } from "react";
import GreenLogo from "../../assets/logo/logo-green.svg?react";
import NavigationLink from "./NavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navigationLinks } from "./navigation-links";

import "../../styles/components/Header.scss";

const Header: React.FunctionComponent = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const navigate = useNavigate();
  const mobileHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const mobileHeader = document.getElementById("mobile-header");

    openMobileMenu && (body.style.overflow = "hidden");
    !openMobileMenu && (body.style.overflow = "scroll");

    mobileHeader && openMobileMenu && (mobileHeader.style.top = `${window.scrollY}px`);
    mobileHeader && !openMobileMenu && (mobileHeader.style.top = "0px");
    mobileHeaderRef.current && openMobileMenu && (mobileHeaderRef.current.style.top = `${window.scrollY}px`);
  }, [openMobileMenu]);

  return (
    <React.Fragment>
      { openMobileMenu ?
        <div id="mobile-header" ref={mobileHeaderRef} >
          <button className="close-mobile-menu" onClick={() => setOpenMobileMenu(!openMobileMenu)} >
            <FontAwesomeIcon icon={faXmark} fontSize={"30px"} />
          </button>
          { navigationLinks.map((navigationLink) => 
            <NavigationLink 
              key={navigationLink.id} 
              onClickCallback={() => setOpenMobileMenu(!openMobileMenu) } 
              {...navigationLink}
            />
          )}
        </div> :
        <div id="header" className="header" style={{ top: 0 }}>
          <div className="container">
            <button className="logo" onClick={() => navigate("/")}>
              <GreenLogo />
            </button>
            <div className="navigation-links">
              { navigationLinks.map((navigationLink) => <NavigationLink key={navigationLink.id} {...navigationLink} />) }
            </div>
            <button className="mobile-menu" onClick={() => setOpenMobileMenu(!openMobileMenu)} >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default Header;
