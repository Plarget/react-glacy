import products from '@shared/data/products'
import ProductCard from '@shared/ui/ProductCard'
import './CatalogProducts.scss'
import Button from '@shared/ui/Button'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Slider from '@shared/ui/Slider'
import IconButton from '@shared/ui/IconButton'


const CatalogProducts = () => {
  const [showProducts, setShowProducts] = useState(5)

  const moreProducts = () => {
    setShowProducts(a => a + 5)
  }
  return (
    <section className="catalog-products">
      <div className="catalog-products__inner container">
        <div className="catalog-products__body">
          { products.slice(0, showProducts).map((element) => {
            return <ProductCard product={ element } key={ element.id }/>
          }) }
        </div>
        <div className="catalog-products__actions">
          { products.length > showProducts &&
            <Button className="button--white" onClick={ moreProducts }>Показать еще</Button> }
          <Slider
          >
            <SwiperSlide>
              <IconButton className='icon-button--white'>1</IconButton>
            </SwiperSlide>
            <SwiperSlide>
              <IconButton className='icon-button--white'>2</IconButton>
            </SwiperSlide>
            <SwiperSlide>
              <IconButton className='icon-button--white'>3</IconButton>
            </SwiperSlide>
            <SwiperSlide>
              <IconButton className='icon-button--white'>4</IconButton>
            </SwiperSlide>
            <SwiperSlide>
              <IconButton className='icon-button--white'>5</IconButton>
            </SwiperSlide>
            <SwiperSlide>
              <IconButton className='icon-button--white'>6</IconButton>
            </SwiperSlide>
            <SwiperSlide>
              <IconButton className='icon-button--white'>7</IconButton>
            </SwiperSlide>
          </Slider>
        </div>
        <hr className="catalog-products__line"/>
      </div>
    </section>
  )
}
export default CatalogProducts