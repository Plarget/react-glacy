import Button from '@shared/ui/Button/ui'
import { SwiperSlide } from 'swiper/react'
import Slider from '@shared/ui/Slider'
import ProductBannerCard from '@shared/ui/ProductBannerCard'
import productsBanner from '@shared/data/productsBanner'
import { Pagination, Thumbs } from 'swiper'
import { useState } from 'react'
import { cartSlice } from '@shared/store/reducers/CartSice'
import { useDispatch } from 'react-redux'
import useNotification from '@shared/hooks/useNotification'
import classNames from 'classnames'
import SocialGroup from '@shared/ui/SocialGroup'
import './MainPreview.scss'
import 'swiper/css'


const MainPreview = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeSLide, setActivesSlide] = useState(productsBanner[0])
  const { addToCart } = cartSlice.actions
  const dispatch = useDispatch()
  const notification = useNotification('Товар успешно попал в корзину!')
  const changeColorBody = (index) => {
    const { colorClass } = productsBanner[index]
    let classesBody = document.body.className.split(' ')
    productsBanner.forEach((element) => {
      classesBody = classesBody.filter((elementClass) => {
        return element.colorClass !== elementClass
      })
    })
    document.body.className = classNames(classesBody, colorClass)
  }

  return (
    <section className="preview">
      <div className="preview__inner container">
        <div className="preview__body">
          <article className="preview__about">
            <h1 className="preview__title title title--big">{ activeSLide.name }</h1>
            <div className="preview__text text text--big"><p>{ activeSLide.description }</p></div>
            <Button
              className="preview__button button--white"
              onClick={ () => {
                dispatch(addToCart(activeSLide))
                notification()
              }
              }
            >Заказать
            </Button>
          </article>
          <div className="preview__sliders">
            <div className="preview__main-slider">
              <Slider
                classNameNavigation="preview__slider-navigation"
                modules={ [Pagination, Thumbs] }
                pagination={ { clickable: true } }
                thumbs={ { swiper: thumbsSwiper } }
                onSlideChangeTransitionEnd={ (swiper) => {
                  setActivesSlide(productsBanner[swiper.activeIndex])
                  changeColorBody(swiper.activeIndex)
                } }
                hasNavigation
              >
                { productsBanner.map((element) => {
                  const { id, img } = element
                  return (
                    <SwiperSlide key={ id }>
                      <ProductBannerCard img={ img }/>
                    </SwiperSlide> )
                }) }
              </Slider>
            </div>
            <div className="preview__thumb-slider">
              <Slider
                slidesPerView={ 2 }
                modules={ [Thumbs] }
                watchSlidesProgress
                onSwiper={ setThumbsSwiper }
                spaceBetween={ 41 }
              >
                { productsBanner.map((element) => {
                  const { id, img } = element
                  return (
                    <SwiperSlide key={ id }>
                      <ProductBannerCard img={ img }/>
                    </SwiperSlide> )
                }) }
              </Slider>
            </div>
          </div>
        </div>
        <div className="preview__footer">
          <SocialGroup/>
        </div>
      </div>

    </section>
  )
}

export default MainPreview