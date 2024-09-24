import GalleryGrid from "../../components/gallery-grid/GalleryGrid";
import Label from "../../components/label/Label";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import Title from "../../components/title/Title";
import TranslationsHelper from "../../utils/TranslationsHelper";

import "../../styles/components/GallerySection.scss";

const GallerySection: React.FunctionComponent = () => {

  return (
    <div className="gallery-section">
      <Label text={TranslationsHelper.all.homepage.gallery.label} />
      <div className="title-and-button">
        <Title text={TranslationsHelper.all.homepage.gallery.title} />
        <SectionNavButton
          text={TranslationsHelper.all.homepage.gallery.button}
          link="/galeria"
        />
      </div>
      <GalleryGrid />
    </div>
  )
}

export default GallerySection;
