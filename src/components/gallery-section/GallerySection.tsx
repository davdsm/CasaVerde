import GalleryGrid from "../../components/gallery-grid/GalleryGrid";
import Label from "../../components/label/Label";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import Title from "../../components/title/Title";
import TranslationsHelper from "../../utils/TranslationsHelper";

import "../../styles/components/GallerySection.scss";
import React from "react";

interface IGallerySection {
  hideHeader?: boolean;
  exclude?: string;
}

const GallerySection: React.FunctionComponent<IGallerySection> = ({ hideHeader, exclude }: IGallerySection) => {

  return (
    <div className="gallery-section">
      { !hideHeader && 
        <React.Fragment>
          <Label text={TranslationsHelper.all.homepage.gallery.label} />
          <div className="title-and-button">
            <Title text={TranslationsHelper.all.homepage.gallery.title} />
            <SectionNavButton
              text={TranslationsHelper.all.homepage.gallery.button}
              link="/gallery"
            />
          </div>
        </React.Fragment>
      }
      <GalleryGrid exclude={exclude} />
    </div>
  )
}

export default GallerySection;
