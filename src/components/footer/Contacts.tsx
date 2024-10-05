import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TranslationsHelper from "../../utils/TranslationsHelper";
import socialMedia from "./social-media";
import { SocialMediaType } from "./SocialMedia";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import WhiteLogo from "../../assets/logo/logo-white.svg?react";

const Contacts: React.FunctionComponent = () => {

  return (
    <div className="contacts-section" data-aos="fade-left" data-delay="200" data-aos-duration="2000" >
        <hr/>
        <div className="contacts">
            <span>+351 962 342 739</span>
            <span className="phone-info">{TranslationsHelper.all.footer.contacts["call-info"]}</span>
            <a href="mailto:sgoncalves@vertende-calorosa.pt">
            sgoncalves@vertende-calorosa.pt
            </a>
            <div className="social-media">
              {socialMedia.map(({link, name, type}) =>
                <a key={name} href={link}>
                  { type === SocialMediaType.INSTAGRAM && <FontAwesomeIcon icon={faInstagram} fontSize={"15px"} /> }
                  { type === SocialMediaType.LINKEDIN  && <FontAwesomeIcon icon={faLinkedin} fontSize={"15px"} /> }
                  { type === SocialMediaType.FACEBOOK && <FontAwesomeIcon icon={faFacebook} fontSize={"15px"} /> }
                </a>
              )}
            </div>
        </div>
        <div className="logo">
          <WhiteLogo />
        </div>
    </div>
  )
}

export default Contacts;
