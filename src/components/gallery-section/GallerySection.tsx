import React from "react";
import GalleryGrid from "../../components/gallery-grid/GalleryGrid";
import Label from "../../components/label/Label";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import Title from "../../components/title/Title";

import "../../styles/components/GallerySection.scss";

interface IGallerySection {
  hideHeader?: boolean;
  exclude?: string;
}

const GallerySection: React.FunctionComponent<IGallerySection> = ({ hideHeader, exclude }: IGallerySection) => {

  return (
    <div className="gallery-section">
      { !hideHeader && 
        <React.Fragment>
          <Label text={"homepage.gallery.label"} />
          <div className="title-and-button" data-aos="fade-up" data-aos-duration="1500">
            <Title text="homepage.gallery.title" />
            <SectionNavButton
              text="homepage.gallery.button"
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
