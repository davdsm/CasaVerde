
import React, { useRef, useState } from "react";
import GreenLogo from "../../assets/logo/logo-green.png";
import NavigationLink from "./NavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navigationLinks } from "./navigation-links";
import Modal from "../../Modal";
import { Locale } from "../../App";

import "../../styles/components/Header.scss";

interface IHeader {
  locale: Locale;
}

const Header: React.FunctionComponent<IHeader> = ({ locale }: IHeader) => {

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const navigate = useNavigate();
  const mobileHeaderRef = useRef<HTMLDivElement>(null);

  const languageButtons = (
     locale === Locale.EN ?
      <button className="language-button" onClick={() => {
        localStorage.setItem("locale", "PT");
        location.reload();
      }}>
          PT
      </button> :
      <button className="language-button" onClick={() => {
        localStorage.setItem("locale", "EN");
        location.reload();
      }}>
          EN
      </button>
    );

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
            <div className="mobile-locale">
              {languageButtons}
            </div>
          </div>
        </Modal>
      }
      <div id="header" className="header" style={{ top: 0 }}>
        <div className="container">
          <button className="logo" onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            }
            else { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }
          }}>
            <img src={GreenLogo} alt="logo" />
          </button>
          <div className="navigation-links">
            { navigationLinks.map((navigationLink) => <NavigationLink key={navigationLink.id} {...navigationLink} />) }
          </div>
          {languageButtons}
          <button className="mobile-menu" onClick={() => setOpenMobileMenu(!openMobileMenu)} >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;
