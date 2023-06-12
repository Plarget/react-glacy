import {Swiper} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.scss'
export const Slider = (props) => {
  const {children} = props
  return (
      <Swiper
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={41}
          pagination={{ clickable: true,
            bulletElement: 'button'}}

          slidesPerView={3}
      >
        {children}
      </Swiper>
  )
}