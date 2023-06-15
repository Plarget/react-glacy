import Button from '../Button'
import { cartSlice } from '@shared/store/reducers/CartSice'
import { useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import './ProductCard.scss'
import useNotification from '@shared/hooks/useNotification'


const ProductCard = (props) => {
  const { product } = props
  const { name, img, price, description } = product
  const { addToCart } = cartSlice.actions
  const dispatch = useDispatch()
  const notification = useNotification('Товар успешно попал в корзину!')
  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img width="168" height="168" loading="lazy" src={ img } alt="pink icecream" className="product-card__image"/>
      </div>
      <h3 className="product-card__label label label--small">{ name }</h3>
      <div className="product-card__text text text--gray"><p>{ description }</p></div>
      <div className="product-card__actions">
        <div className="product-card__price label label--small">{ price } ₽/кг</div>
        <Button
          className="product-card__button button--red-round"
          onClick={ () => {
            dispatch(addToCart(product))
            notification()
          } }
        >
          <ReactSVG src="images/icons/cart.svg"/>
        </Button>
      </div>
    </div>
  )
}

export default ProductCard