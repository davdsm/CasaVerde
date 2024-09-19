
import GreenLogo from "../../assets/logo/logo-green.svg?react";
import NavigationLink from "./NavigationLink";

import { navigationLinks } from "./navigation-links";

import "../../styles/components/Header.scss";

const Header: React.FunctionComponent = () => {
  return (
    <div id="header" className="header">
      <div className="container">
        <GreenLogo />
        <div className="navigation-links">
          { navigationLinks.map((navigationLink) => <NavigationLink key={navigationLink.id} {...navigationLink} />) }
        </div>
      </div>
    </div>
  )
}

export default Header;
