import PresentationVideo from "./PresentationVideo";
import IntroSection from "./intro-section/IntroSection";
import OurSpacesSection from "../../components/our-spaces-section/OurSpacesSection";
import BenefitsSection from "./benefits-section/BenefitsSection";
import GallerySection from "../../components/gallery-section/GallerySection";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

import "../../styles/pages/HomePage.scss";

const Homepage: React.FunctionComponent = () => {

  const intl = useIntl();

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | {intl.formatMessage({ id: "header.homepage" })}</title>
      </Helmet>
      <div className="homepage container">
        <PresentationVideo />
        <IntroSection />
        <OurSpacesSection />
        <BenefitsSection />
        <GallerySection />
      </div>
    </React.Fragment>
  )
}

export default Homepage;
