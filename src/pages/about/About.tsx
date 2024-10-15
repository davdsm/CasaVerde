import GallerySection from "../../components/gallery-section/GallerySection";
import Label from "../../components/label/Label";
import Title from "../../components/title/Title";
import CasaVerdePropsSection from "./CasaVerdePropsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

import "../../styles/pages/About.scss";

const About: React.FunctionComponent = () => {

  const intl = useIntl();

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | {intl.formatMessage({ id: "header.about" })}</title>
      </Helmet>
      <div className="about container">
        <div className="intro-section" data-aos="fade-up" data-aos-duration="1500">
          <Title text={intl.formatMessage({ id: "about.intro.title" })} />
          <div className="intro-navigation" data-aos="fade-up" data-aos-duration="1500">
            { intl.formatMessage({ id: "about.intro.from" }) }
            <div className="link-arrow">
              <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} />
              <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} />
          </div>
            { intl.formatMessage({ id: "about.intro.to" }) }
          </div>
        </div>
        <div className="why-section">
          <div className="label-and-title">
            <Label text={intl.formatMessage({ id: "about.props.label" })} />
            <span className="title" data-aos="fade-up" data-aos-duration="1500">
              {intl.formatMessage({ id: "about.props.title" })}
              &nbsp;
              <span className="dark-green-text">{intl.formatMessage({ id: "about.props.casa-verde" })}</span>
              &nbsp;?
            </span>
          </div>
          <CasaVerdePropsSection />
        </div>
        <GallerySection />
      </div>
    </React.Fragment>
  )
}

export default About;
