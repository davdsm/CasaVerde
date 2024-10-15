import Label from "../label/Label";
import SectionNavButton from "../section-nav-button/SectionNavButton";
import Title from "../title/Title";
import OfficesSlider from "./OfficesSlider";

import "../../styles/components/OurSpacesSection.scss";

interface IOurSpacesSection {
  exclude?: string;
}

const OurSpacesSection: React.FunctionComponent<IOurSpacesSection> = ({ exclude }: IOurSpacesSection) => {

  return (
    <div className="our-spaces-section">
      <Label text={"homepage.spaces.label"} />
      <div className="title-and-button" data-aos="fade-up" data-aos-duration="1500" >
        <Title text={"homepage.spaces.title"} />
        <SectionNavButton
          text={"homepage.spaces.button"}
          link="/offices"
        />
      </div>
      <OfficesSlider exclude={exclude} />
    </div>
  )
}

export default OurSpacesSection;
