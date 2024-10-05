import { useEffect, useState } from "react";
import GalleryGridItem from "./GalleryGridItem";
import shuffle from "lodash/shuffle";

import galleryImages from "./GalleryImages";

import "../../styles/components/GalleryGrid.scss";

interface IGalleryGrid {
  exclude?: string;
}

const GalleryGrid: React.FunctionComponent<IGalleryGrid> = ({ exclude }: IGalleryGrid) => {

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
    <div className="gallery-grid" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
      { shuffle(galleryImages
        .filter((galleryImage) => galleryImage.id !== exclude))
        .slice(0, numberOfImages).map((galleryImage) =>
          <GalleryGridItem key={galleryImage.imageSrc} {...galleryImage} />
      )}
    </div>
  )
}

export default GalleryGrid;
