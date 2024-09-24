import PresentationVideo from "./PresentationVideo";
import IntroSection from "./intro-section/IntroSection";
import OurSpacesSection from "../../components/our-spaces-section/OurSpacesSection";
import BenefitsSection from "./benefits-section/BenefitsSection";
import GallerySection from "../../components/gallery-section/GallerySection";

import "../../styles/pages/HomePage.scss";

const Homepage: React.FunctionComponent = () => {

  return (
    <div className="homepage container">
      <PresentationVideo />
      <IntroSection />
      <OurSpacesSection />
      <BenefitsSection />
      <GallerySection />
    </div>
  )
}

export default Homepage;
