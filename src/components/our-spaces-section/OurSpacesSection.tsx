import Label from "../label/Label";
import SectionNavButton from "../section-nav-button/SectionNavButton";
import Title from "../title/Title";
import TranslationsHelper from "../../utils/TranslationsHelper";
import OfficesSlider from "./OfficesSlider";

import "../../styles/components/OurSpacesSection.scss";

const OurSpacesSection: React.FunctionComponent = () => {

  return (
    <div className="our-spaces-section">
      <Label text={TranslationsHelper.all.homepage.spaces.label} />
      <div className="title-and-button">
        <Title text={TranslationsHelper.all.homepage.spaces.title} />
        <SectionNavButton
          text={TranslationsHelper.all.homepage.spaces.button}
          link="/escritorios"
        />
      </div>
      <OfficesSlider />
    </div>
  )
}

export default OurSpacesSection;
