import courseDetails from "../../assets/slider/slide_1.png";
import courseDetails2 from "../../assets/slider/slide_2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomeSlider.css";

import { EffectFade, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={courseDetails} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={courseDetails2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
