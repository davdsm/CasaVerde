import { Swiper, SwiperSlide } from "swiper/react";
import OfficeCard, { SpaceType } from "../office-card/OfficeCard";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import shuffle from 'lodash/shuffle';

import spaces from "./spaces";

import 'swiper/css';
import 'swiper/css/pagination';

interface IOfficesSlider {
  exclude?: string;
}

const OfficesSlider: React.FunctionComponent<IOfficesSlider> = ({ exclude }: IOfficesSlider) => {

  const [randomSpaces, setRandomSpaces] = useState<typeof spaces>([]);

  useEffect(() => {

    const officesAndStore = spaces.filter((space) => space.id !== exclude && space.label !== SpaceType.MEETING_ROOM);

    setRandomSpaces(() => shuffle(officesAndStore).slice(0, 5));

  }, []);

  return (
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1250: {
            spaceBetween: 30,
            slidesPerView: 3
          },
          500: {
            spaceBetween: 15,
            slidesPerView: 2
          }
        }}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {randomSpaces.map((space) => 
          <SwiperSlide key={space.link}>
            <OfficeCard {...space} />
          </SwiperSlide>
        )}
      </Swiper>
  )
}

export default OfficesSlider;
