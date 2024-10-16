import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useIntl } from "react-intl";

export enum SocialMediaType {
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
    FACEBOOK = 'facebook',
}

interface ISocialMedia {
    type: SocialMediaType;
    name: string;
    link: string;
}

const SocialMedia: React.FunctionComponent<ISocialMedia> = ({ type, name, link }: ISocialMedia) => {

    const intl = useIntl();

    return (
        <div className="social-media-column">
            <hr />
            <div className="social-media-link" data-aos="fade-up" data-delay="200" data-aos-duration="2000">
                <a href={link} target="_blank" >{intl.formatMessage({ id: name })}</a>
                <a href={link} target="_blank" >
                    { type === SocialMediaType.INSTAGRAM && <FontAwesomeIcon icon={faInstagram} fontSize={"15px"} /> }
                    { type === SocialMediaType.LINKEDIN  && <FontAwesomeIcon icon={faLinkedin} fontSize={"15px"} /> }
                    { type === SocialMediaType.FACEBOOK && <FontAwesomeIcon icon={faFacebook} fontSize={"15px"} /> }
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;
