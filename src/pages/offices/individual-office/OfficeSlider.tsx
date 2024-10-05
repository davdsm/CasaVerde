import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


interface IOfficeSlider {
  images: {
    src: string;
    alt: string;
    horizontal?: boolean;
  }[];
}

const OfficeSlider: React.FunctionComponent<IOfficeSlider> = ({ images }: IOfficeSlider) => {

  return (
    <div className="office-slider">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, EffectFade]}
        navigation={true}
        loop={true}
        effect={"fade"}
        data-aos="fade-down" 
        data-aos-duration="1500"
      >
        {images.map(({ src, alt }) => 
          <SwiperSlide key={alt} style={{ backgroundImage: `url(${src})` }} > 
          {/* backgroundSize: horizontal ? "cover" : "contain" */}
          </SwiperSlide>
        )}
        <SliderNavigation />
      </Swiper>
    </div>
  )
}

export default OfficeSlider;
