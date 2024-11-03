import React, { useRef, useState } from "react";
import SectionNavButton from "../../components/section-nav-button/SectionNavButton";
import GridTemplate from "./GridTemplate";
import { SpaceType } from "../../components/office-card/OfficeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modal";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import SliderNavigation from "../spaces/individual-space/SliderNavigation";

import galleryImages from "./galleryImages";
import filters from "./filters";


import "../../styles/pages/Gallery.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Gallery: React.FunctionComponent = () => {

  type GalleryType = typeof galleryImages;

  const [filteredImages, setFilteredImages] = useState<GalleryType>(galleryImages);

  const [gridTemplateImages, setGridTemplateImages] = useState<GalleryType[]>([galleryImages.slice(0, 7)]);
  const [gridTemplateRows, setGridTemplateRows] = useState<number[]>([4]);
  const [filterSelected, setFilterSelected] = useState<SpaceType>();
  const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(galleryImages.length > 7);
  const [areAllImagesShown, setAreAllImagesShown] = useState<boolean>(galleryImages.length <= 7);

  const [showImageFullWidth, setShowImageFullWidth] = useState<boolean>(false);
  const [imageFullWidthIndex, setImageFullWidthIndex] = useState<number>(0);

  const imageFullWidthRef = useRef<HTMLDivElement>(null);

  const intl = useIntl();

  const onFilter = (filter?: SpaceType) => {

    setFilterSelected(filter);
    let galleryClone = [...galleryImages];

    if (filter) {
      galleryClone = [...galleryImages.filter(({ type }) => type === filter)];
      setFilteredImages([...galleryClone]);
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
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | {intl.formatMessage({ id: "header.gallery" })}</title>
      </Helmet>
      <div className="gallery container">
        <div className="filters" data-aos="fade-up" data-aos-duration="1500">
          {filters.map(({ type, name }) => 
            <button
              key={name}
              className={`filter ${ filterSelected === type ?"active" : ""}`} 
              onClick={() => onFilter(type)}
            >
              {intl.formatMessage({ id: name })}
            </button>
          )}
        </div>
        <div className="grid-parent">
          {gridTemplateRows.map((numberOfRows: number, index) => 
            <div key={index} className={`grid row-${numberOfRows}`} >
              {gridTemplateImages[index].map(({ src, alt }) => 
                <div key={alt} className="grid-image" data-aos="fade-up" data-aos-duration="1500" >
                  <button style={{ backgroundImage: `url(${src})` }} onClick={() => {
                    const imageFullWidthIndex = filteredImages.findIndex((image) => image.src === src);
                    setImageFullWidthIndex(imageFullWidthIndex);
                    setShowImageFullWidth(true);
                  }}></button>
                </div>
              )}
            </div>
          )}
        </div>
        { showLoadMoreButton && 
          <SectionNavButton text={"gallery.load-more"} onClick={onLoadMore} />
        }
        {showImageFullWidth && 
          <Modal childrenRef={imageFullWidthRef}>
            <div ref={imageFullWidthRef} id="image-full-width">
              <button className="close-mobile-menu" onClick={() => {
                  imageFullWidthRef.current && (imageFullWidthRef.current.style.animationName = "fade-out-left-100");
                  setTimeout(() => setShowImageFullWidth(!showImageFullWidth), 1000);
                }} >
                <FontAwesomeIcon icon={faXmark} fontSize={"30px"} />
              </button>
              <div className="gallery-slider">
                <Swiper
                  initialSlide={imageFullWidthIndex}
                  slidesPerView={1}
                  modules={[Navigation, EffectFade]}
                  navigation={true}
                  loop={true}
                  effect={"fade"}
                  fadeEffect={{
                    crossFade: true
                  }}
                >
                  {filteredImages.map(({ src, alt }) => 
                    <SwiperSlide key={alt} > 
                      <img
                        src={src}
                        alt="image-full-width"
                        onLoad={(element) => {
                          if (element.currentTarget.width > element.currentTarget.height) {
                            element.currentTarget.className = "horizontal";
                          }
                        }}
                      />
                    </SwiperSlide>
                  )}
                  <SliderNavigation />
                </Swiper>
              </div>
            </div>
          </Modal>
        }
      </div>
    </React.Fragment>
  )
}

export default Gallery;
