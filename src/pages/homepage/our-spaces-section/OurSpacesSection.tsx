import Label from "../../../components/label/Label";
import SectionNavButton from "../../../components/section-nav-button/SectionNavButton";
import Title from "../../../components/title/Title";
import TranslationsHelper from "../../../utils/TranslationsHelper";
import OfficesSlider from "./OfficesSlider";

const OurSpacesSection: React.FunctionComponent = () => {

  return (
    <div className="our-spaces-section">
      <Label text={TranslationsHelper.all.homepage.spaces.label} />
      <div className="title-and-button">
        <Title text={TranslationsHelper.all.homepage.spaces.title} />
        <SectionNavButton
          text={TranslationsHelper.all.homepage.spaces.button}
          link="/spaces"
        />
      </div>
      <OfficesSlider />
    </div>
  )
}

export default OurSpacesSection;
