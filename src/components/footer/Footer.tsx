import HelpBox from "./HelpBox";
import Newsletter from "./Newsletter";
import Contacts from "./Contacts";
import menus from "./menus";
import Menu from "./Menu";
import socialMedia from "./social-media";
import SocialMedia from "./SocialMedia";
import { useIntl } from "react-intl";

import WhiteLogo from "../../assets/logo/logo-white.svg?react";
import BackToTopArrow from "../../assets//footer/back-to-top-arrow.svg?react";

import "../../styles/components/Footer.scss";

const Footer: React.FunctionComponent = () => {

  const intl = useIntl();

  return (
    <div id="footer" className="footer">
      <div className="container">
        <HelpBox />
        <div className="menus-and-newsletter">
          <div className="menus-and-logo">
            <div className="menus">
              { menus.map(({ title, options }) => <Menu key={title} title={title} options={options}/>) }
            </div>
            <div className="logo" data-aos="fade-up" data-delay="200" data-aos-duration="2000">
              <WhiteLogo />
            </div>
          </div>
          <div className="newsletter-and-contacts">
            <Newsletter />
            <Contacts />
          </div>
        </div>
        <div className="social-media-and-rights" data-aos="fade-up"data-delay="200" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
          <div className="social-media">
            { socialMedia.map((social) => <SocialMedia key={social.name} {...social}/>) }
          </div>
          <div className="rights-and-back-to-top">
            <span className="rights" >
              &#169; { new Date().getFullYear() }	{intl.formatMessage({ id: "footer.rights" })}
            </span>
            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} >
              <BackToTopArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
