import { useState } from "react";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import TranslationsHelper from "../../utils/TranslationsHelper";
import GridTemplate from "./GridTemplate";
import { SpaceType } from "../../components/office-card/OfficeCard";
import shuffle from "lodash/shuffle";

import galleryImages from "./galleryImages";
import filters from "./filters";

import "../../styles/pages/Gallery.scss";

const Gallery: React.FunctionComponent = () => {

  type GalleryType = typeof galleryImages;

  const [gridTemplateImages, setGridTemplateImages] = useState<GalleryType[]>([shuffle(galleryImages).slice(0, 7)]);
  const [gridTemplateRows, setGridTemplateRows] = useState<number[]>([4]);
  const [filterSelected, setFilterSelected] = useState<SpaceType>();
  const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(galleryImages.length > 7);
  const [areAllImagesShown, setAreAllImagesShown] = useState<boolean>(galleryImages.length <= 7);

  const onFilter = (filter?: SpaceType) => {

    setFilterSelected(filter);
    let galleryClone = [...galleryImages];

    if (filter) {
      galleryClone = [...galleryImages.filter(({ type }) => type === filter)];
    }

    if (!areAllImagesShown) {

      const newImages: GalleryType[] = [shuffle(galleryClone).slice(0, 7)];

      setGridTemplateRows(() => [4]);
      setGridTemplateImages(() => newImages);
      setShowLoadMoreButton(() => galleryClone.length > 7);
      setAreAllImagesShown(() => galleryClone.length <= 7)
    }
    else {
      onLoadMore(filter);
    }
  }

  const onLoadMore = (filter?: SpaceType) => {

    let numberOfImages = galleryImages.length;
    let galleryClone = [...galleryImages];
    let newImages: GalleryType[] = [];

    let filterToUse = filter || filterSelected;

    if (filterToUse) {
      galleryClone = [...galleryImages.filter(({ type }) => type === filterToUse)];
      numberOfImages = galleryClone.length;
    }

    const { images, rows } = GridTemplate(numberOfImages);
    setGridTemplateRows(() => rows);

    images.map((number) => (newImages = [...newImages, shuffle(galleryClone).splice(0, number)]));
    setGridTemplateImages(() => newImages);

    !filter && setShowLoadMoreButton(() => false);
    setAreAllImagesShown(() => true);
  };

  return (
    <div className="gallery container">
      <div className="filters">
        {filters.map(({ type, name }) => 
          <button
            key={name}
            className={`filter ${ filterSelected === type ?"active" : ""}`} 
            onClick={() => onFilter(type)}
          >
            {name}
          </button>
        )}
      </div>
      <div className="grid-parent">
        {gridTemplateRows.map((numberOfRows: number, index) => 
          <div key={index} className={`grid row-${numberOfRows}`} >
            {gridTemplateImages[index].map(({ src, alt }) => 
              <div key={alt} className="grid-image" style={{ backgroundImage: `url(${src})` }}></div>
            )}
          </div>
        )}
      </div>
      { showLoadMoreButton && 
        <SectionNavButton text={TranslationsHelper.all.gallery["load-more"]} onClick={onLoadMore} />
      }
    </div>
  )
}

export default Gallery;
