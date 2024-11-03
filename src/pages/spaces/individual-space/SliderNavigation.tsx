import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SliderNavigation: React.FunctionComponent = () => {

    const swiper = useSwiper();

    return (
        <div className="swiper-navigation">
            <button onClick={() => swiper.slidePrev()}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default SliderNavigation;
