import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMedia from "./social-media";
import { SocialMediaType } from "./SocialMedia";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useIntl } from "react-intl";

import WhiteLogo from "../../assets/logo/logo-white.svg?react";

const PHONE_NUMBER: string = import.meta.env.VITE_PHONE_NUMBER;
const EMAIL: string = import.meta.env.VITE_EMAIL;

const Contacts: React.FunctionComponent = () => {

  const intl = useIntl();

  return (
    <div className="contacts-section" data-aos="fade-up" data-delay="200" data-aos-duration="2000" >
        <hr/>
        <div className="contacts">
            <span>{PHONE_NUMBER}</span>
            <span className="phone-info">
              {intl.formatMessage({ id: "footer.contacts.call-info" })}
            </span>
            <a href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <div className="social-media">
              {socialMedia.map(({link, name, type}) =>
                <a key={name} href={link} target="_blank" >
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
