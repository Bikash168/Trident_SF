import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const TestCarousel = () => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
  >
    <SwiperSlide>
      <img src="/images/slide1.png" alt="Slide 1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/slide2.png" alt="Slide 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/slide3.png" alt="Slide 2" />
    </SwiperSlide>
  </Swiper>
);

export default TestCarousel;
