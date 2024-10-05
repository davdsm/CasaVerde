import GallerySection from "../../components/gallery-section/GallerySection";
import Label from "../../components/label/Label";
import Title from "../../components/title/Title";
import TranslationsHelper from "../../utils/TranslationsHelper";
import CasaVerdePropsSection from "./CasaVerdePropsSection";

import "../../styles/pages/About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const About: React.FunctionComponent = () => {

  return (
    <div className="about container">
      <div className="intro-section" data-aos="fade-up" data-aos-duration="1500">
        <Title text={TranslationsHelper.all.about.intro.title} />
        <div className="intro-navigation" data-aos="fade-right" data-aos-duration="1500">
          {TranslationsHelper.all.about.intro.from}
          <div className="link-arrow">
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} />
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} />
        </div>
          {TranslationsHelper.all.about.intro.to}
        </div>
      </div>
      <div className="why-section">
        <div className="label-and-title">
          <Label text={TranslationsHelper.all.about.props.label} />
          <span className="title" data-aos="fade-right" data-aos-duration="1500">
            {TranslationsHelper.all.about.props.title}
            &nbsp;
            <span className="dark-green-text">{TranslationsHelper.all.about.props["casa-verde"]}</span>
            &nbsp;?
          </span>
        </div>
        <CasaVerdePropsSection />
      </div>
      <GallerySection />
    </div>
  )
}

export default About;
