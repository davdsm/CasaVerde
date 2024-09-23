import { useEffect, useState } from "react";
import GalleryGridItem from "./GalleryGridItem";
import shuffle from "lodash/shuffle";

import galleryImages from "./GalleryImages";

import "../../styles/components/GalleryGrid.scss";

const GalleryGrid: React.FunctionComponent = () => {

  const [numberOfImages, setNumberOfImages] = useState<number>(10);

  const updateNumberOfImagesInGallery = () => {

    if (window.innerWidth < 350) {
      setNumberOfImages(() => 4);
    }
    else if (window.innerWidth < 550) {
      setNumberOfImages(() => 5);
    }
    else if (window.innerWidth < 800) {
      setNumberOfImages(() => 7);
    }
    else {
      setNumberOfImages(() => 10);
    }
  }

  useEffect(() => {
    updateNumberOfImagesInGallery();
  }, []);

  window.onresize = updateNumberOfImagesInGallery;

  return (
    <div className="gallery-grid">
        {shuffle(galleryImages).slice(0, numberOfImages).map((galleryImage) =>
            <GalleryGridItem key={galleryImage.imageAlt} {...galleryImage} />
        )}
    </div>
  )
}

export default GalleryGrid;
