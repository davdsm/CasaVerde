import Label from "../label/Label";
import SectionNavButton from "../section-nav-button/SectionNavButton";
import Title from "../title/Title";
import TranslationsHelper from "../../utils/TranslationsHelper";
import OfficesSlider from "./OfficesSlider";

import "../../styles/components/OurSpacesSection.scss";

interface IOurSpacesSection {
  exclude?: string;
}

const OurSpacesSection: React.FunctionComponent<IOurSpacesSection> = ({ exclude }: IOurSpacesSection) => {

  return (
    <div className="our-spaces-section">
      <Label text={TranslationsHelper.all.homepage.spaces.label} />
      <div className="title-and-button" data-aos="fade-right" data-aos-duration="1500" >
        <Title text={TranslationsHelper.all.homepage.spaces.title} />
        <SectionNavButton
          text={TranslationsHelper.all.homepage.spaces.button}
          link="/offices"
        />
      </div>
      <OfficesSlider exclude={exclude} />
    </div>
  )
}

export default OurSpacesSection;
