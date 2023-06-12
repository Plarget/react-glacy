import './styles.scss'
import Button from "../Button/ui";
import {cartSlice} from "../../../app/store/reducers/CartSice";
import {useDispatch} from "react-redux";

export const ProductCard = (props) => {
  const {product} = props

  const {name,img,price,description} = product
  const {addToCart} = cartSlice.actions
  const dispatch = useDispatch()
  return (
      <div className='product-card'>
        <div className="product-card__image-wrap">
          <img width='168' height='168' loading='lazy' src={img} alt="pink icecream" className="product-card__image"/>
        </div>
         <h3 className="product-card__label label label--small">{name}</h3>
        <div className="product-card__text text text--gray"><p>{description}</p></div>
        <div className="product-card__actions">
          <div className="product-card__price label label--small">{price} ₽/кг</div>
          <Button  className='product-card__button button--red-round'
                   onClick={() => dispatch(addToCart(product)) } icon='cart'></Button>
        </div>
      </div>
  )
}
