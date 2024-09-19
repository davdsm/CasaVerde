import GalleryGridItem from "./GalleryGridItem";
import shuffle from "lodash/shuffle";

import galleryImages from "./GalleryImages";

import "../../styles/components/GalleryGrid.scss";

const GalleryGrid: React.FunctionComponent = () => {

  return (
    <div className="gallery-grid">
        {shuffle(galleryImages).slice(0, 10).map((galleryImage) =>
            <GalleryGridItem key={galleryImage.imageAlt} {...galleryImage} />
        )}
    </div>
  )
}

export default GalleryGrid;
