import products from '@shared/data/products'
import ProductCard from '@shared/ui/ProductCard'
import Button from '@shared/ui/Button'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Slider from '@shared/ui/Slider'
import { NavLink, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import classNames from 'classnames'
import './CatalogProducts.scss'


const sortFromPage = (showArray, pageKey, defaultShow) => {
  let array = [...showArray]
  if (!pageKey) return array
  const pageShow = defaultShow * ( pageKey - 1 )
  array = [pageShow, pageShow + defaultShow]
  return array
}

const CatalogProducts = () => {
  const defaultShow = 4
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [pageKey, setPageKey] = useState(+query.page)
  const [showProducts, setShowProducts] = useState(
    sortFromPage([0, defaultShow], pageKey, defaultShow)
  )
  const [useMore, setUseMore] = useState(false)
  const productsFilter = [...products]
  const pagesCount = Math.ceil(productsFilter.length / defaultShow)
  const pagesProducts = Array.from({ length: pagesCount }, (_, index) => index + 1)

  const moreProducts = () => {
    setShowProducts(a => [a[0], a[1] + defaultShow])
    setUseMore(true)
  }

  const navigationToPage = (page) => {
    setPageKey(page)
    setShowProducts(sortFromPage([0, defaultShow], page, defaultShow))
  }
  return (
    <section className="catalog-products">
      <div className="catalog-products__inner container">
        <div className="catalog-products__body">
          { productsFilter.slice(showProducts[0], showProducts[1]).map((element) => {
            return <ProductCard product={ element } key={ element.id }/>
          }) }
        </div>
        <div className="catalog-products__actions">
          { ( productsFilter.length > showProducts[1] ) && ( showProducts[0] <= 0 ) &&
            <Button className="catalog-products__button button--white" onClick={ moreProducts }>Показать еще</Button>
          }

          { !useMore &&
            <div className="catalog-products__slider">
              <Slider
                classNameNavigation="catalog-products__navigation"
                slidesPerView={ Math.min(pagesCount, 5) }
                hasNavigation
              >
                { pagesProducts.map((element) => {
                  return (
                    <SwiperSlide key={ element }>
                      <NavLink
                        to={ `?page=${ element }` }
                        className={ classNames('catalog-products__page-button', { 'is-active': pageKey === element }) }
                        onClick={ () => navigationToPage(element) }
                      >
                        { element }
                      </NavLink>
                    </SwiperSlide>
                  )
                }) }
              </Slider>
            </div> }

        </div>
        <hr className="catalog-products__line"/>
      </div>
    </section>
  )
}
export default CatalogProducts