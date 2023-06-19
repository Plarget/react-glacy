import Button from '@shared/ui/Button/ui'
import { SwiperSlide } from 'swiper/react'
import Slider from '@shared/ui/Slider'
import ProductBannerCard from '@shared/ui/ProductBannerCard'
import './MainPreview.scss'
import 'swiper/css'
import { Pagination } from 'swiper'


const MainPreview = () => {
  return (
    <section className="preview">
      <div className="preview__body container">
        <article className="preview__about">
          <h1 className="preview__title title title--big">Нежный пломбир
            с клубничным джемом</h1>
          <div className="preview__text text text--big"><p>Натуральное мороженое из свежих сливок
            и молока с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи.</p></div>
          <Button className="preview__button button--white">Заказать</Button>
        </article>

        <Slider
          modules={ [Pagination] }
          pagination={ { clickable: true } }
          slidesPerView={ 3 }
        >
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
          <SwiperSlide><ProductBannerCard/></SwiperSlide>
        </Slider>
      </div>
    </section>
  )
}

export default MainPreview