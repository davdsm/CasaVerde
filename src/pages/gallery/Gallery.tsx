import { useEffect, useRef, useState } from "react";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import TranslationsHelper from "../../utils/TranslationsHelper";
import GridTemplate from "./GridTemplate";
import { SpaceType } from "../../components/office-card/OfficeCard";

import galleryImages from "./galleryImages";
import filters from "./filters";

import "../../styles/pages/Gallery.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Gallery: React.FunctionComponent = () => {

  type GalleryType = typeof galleryImages;

  const [gridTemplateImages, setGridTemplateImages] = useState<GalleryType[]>([galleryImages.slice(0, 7)]);
  const [gridTemplateRows, setGridTemplateRows] = useState<number[]>([4]);
  const [filterSelected, setFilterSelected] = useState<SpaceType>();
  const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(galleryImages.length > 7);
  const [areAllImagesShown, setAreAllImagesShown] = useState<boolean>(galleryImages.length <= 7);

  const [showImageFullWidth, setShowImageFullWidth] = useState<boolean>(false);
  const [imageFullWidth, setImageFullWidth] = useState<string>();

  const imageFullWidthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const body = document.getElementsByTagName("body")[0];
    const header = document.getElementById("header");

    showImageFullWidth && (body.style.overflow = "hidden");
    !showImageFullWidth && (body.style.overflow = "scroll");
    imageFullWidthRef.current && header && (imageFullWidthRef.current.style.top = `${ window.scrollY - header.clientHeight - 1 }px`);
    imageFullWidthRef.current && showImageFullWidth && (imageFullWidthRef.current.style.display = "flex");
    imageFullWidthRef.current && showImageFullWidth && (imageFullWidthRef.current.style.animationName = "fade-in-left-100");
    imageFullWidthRef.current && !showImageFullWidth && (imageFullWidthRef.current.style.animationName = "fade-out-left-100");

  }, [showImageFullWidth]);


  const onFilter = (filter?: SpaceType) => {

    setFilterSelected(filter);
    let galleryClone = [...galleryImages];

    if (filter) {
      galleryClone = [...galleryImages.filter(({ type }) => type === filter)];
    }

    if (!areAllImagesShown) {

      const newImages: GalleryType[] = [galleryClone.slice(0, 7)];

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

    images.map((number) => (newImages = [...newImages, galleryClone.splice(0, number)]));
    setGridTemplateImages(() => newImages);

    !filter && setShowLoadMoreButton(() => false);
    setAreAllImagesShown(() => true);
  };

  return (
    <div className="gallery container">
      <div className="filters" data-aos="fade-up" data-aos-duration="1500">
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
              <div key={alt} className="grid-image" data-aos="fade-up" data-aos-duration="1500" >
                <button style={{ backgroundImage: `url(${src})` }} onClick={() => {
                  setImageFullWidth(src);
                  setShowImageFullWidth(true);
                }}></button>
              </div>
            )}
          </div>
        )}
      </div>
      { showLoadMoreButton && 
        <SectionNavButton text={TranslationsHelper.all.gallery["load-more"]} onClick={onLoadMore} />
      }
      <div ref={imageFullWidthRef} className="image-full-width">
        <button className="close-mobile-menu" onClick={() => {
            setShowImageFullWidth(false);
          }} >
          <FontAwesomeIcon icon={faXmark} fontSize={"30px"} />
        </button>
        <img 
          src={imageFullWidth}
          alt="image-full-width"
          onLoad={(element) => {
            if (element.currentTarget.width > element.currentTarget.height) {
              element.currentTarget.className = "horizontal";
            }
          }}
        />
      </div>
    </div>
  )
}

export default Gallery;
