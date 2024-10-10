
import React, { useEffect, useRef, useState } from "react";
import GreenLogo from "../../assets/logo/logo-green.png";
import NavigationLink from "./NavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navigationLinks } from "./navigation-links";
import Aos from "aos";
import Modal from "../../Modal";

import "../../styles/components/Header.scss";

const Header: React.FunctionComponent = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const navigate = useNavigate();
  const mobileHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    Aos.refresh();
  }, [location.pathname]);

  return (
    <React.Fragment>
      {openMobileMenu && 
        <Modal childrenRef={mobileHeaderRef} >
          <div id="mobile-header" ref={mobileHeaderRef} >
            <button className="close-mobile-menu" onClick={() => {
              mobileHeaderRef.current && (mobileHeaderRef.current.style.animationName = "fade-out-left-100");
              setTimeout(() => setOpenMobileMenu(!openMobileMenu), 1000);
              }} >
              <FontAwesomeIcon icon={faXmark} fontSize={"30px"} />
            </button>
            { navigationLinks.map((navigationLink) => 
              <NavigationLink 
                key={navigationLink.id} 
                onClickCallback={() => {
                  mobileHeaderRef.current && (mobileHeaderRef.current.style.animationName = "fade-out-left-100");
                  setTimeout(() => setOpenMobileMenu(!openMobileMenu), 1000);
                }} 
                {...navigationLink}
              />
            )}
          </div>
        </Modal>
      }
      <div id="header" className="header" style={{ top: 0 }}>
        <div className="container">
          <button className="logo" onClick={() => {
            if (location.pathname !== "/") {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              navigate("/");
            }
            else { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }
          }}>
            <img src={GreenLogo} alt="logo" />
          </button>
          <div className="navigation-links">
            { navigationLinks.map((navigationLink) => <NavigationLink key={navigationLink.id} {...navigationLink} />) }
          </div>
          <button className="mobile-menu" onClick={() => setOpenMobileMenu(!openMobileMenu)} >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;
