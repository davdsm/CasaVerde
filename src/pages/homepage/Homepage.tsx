import PresentationVideo from "./PresentationVideo";
import IntroSection from "./intro-section/IntroSection";
import OurSpacesSection from "../../components/our-spaces-section/OurSpacesSection";
import BenefitsSection from "./benefits-section/BenefitsSection";
import GallerySection from "../../components/gallery-section/GallerySection";
import React from "react";
import { Helmet } from "react-helmet-async";

import "../../styles/pages/HomePage.scss";

const Homepage: React.FunctionComponent = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | Início</title>
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
