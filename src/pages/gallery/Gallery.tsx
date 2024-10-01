import { useState } from "react";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import TranslationsHelper from "../../utils/TranslationsHelper";
import GridTemplate from "./GridTemplate";
import { SpaceType } from "../../components/office-card/OfficeCard";

import gallery from "./gallery";
import filters from "./filters";

import "../../styles/pages/Gallery.scss";
import shuffle from "lodash/shuffle";

const Gallery: React.FunctionComponent = () => {

  type GalleryType = typeof gallery;

  const [gridTemplateImages, setGridTemplateImages] = useState<GalleryType[]>([shuffle(gallery).slice(0, 7)]);
  const [gridTemplateRows, setGridTemplateRows] = useState<number[]>([4]);
  const [filterSelected, setFilterSelected] = useState<SpaceType>();
  const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(gallery.length > 7);
  const [areAllImagesShown, setAreAllImagesShown] = useState<boolean>(gallery.length <= 7);

  const onFilter = (filter?: SpaceType) => {

    setFilterSelected(filter);
    let galleryClone = [...gallery];

    if (filter) {
      galleryClone = [...gallery.filter(({ type }) => type === filter)];
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

    let numberOfImages = gallery.length;
    let galleryClone = [...gallery];
    let newImages: GalleryType[] = [];

    let filterToUse = filter || filterSelected;

    if (filterToUse) {
      galleryClone = [...gallery.filter(({ type }) => type === filterToUse)];
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
