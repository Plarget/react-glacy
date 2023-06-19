import { cartSlice } from '@shared/store/reducers/CartSice'
import { useDispatch } from 'react-redux'
import './BasketPreviewCard.scss'


const BasketPreviewCard = (props) => {
  const { id, product } = props
  const { name, amount, price, img } = product
  const { deleteFromCart } = cartSlice.actions
  const dispatch = useDispatch()
  return (
    <div className="basket-card">
      <div className="basket-card__preview">
        <img width="46" height="46" loading="lazy" src={ img } alt="icecream" className="basket-card__image"/>
        <div className="basket-card__info">
          <h4 className="basket-card__label label label--very-small">{ name }</h4>
          <div className="basket-card__kilo-price">{ amount } кг х { price } ₽</div>
        </div>
      </div>
      <div className="basket-card__actions">
        <div className="basket-card__price">{ amount * price }&nbsp;₽</div>
        <button className="basket-card__button" onClick={ () => dispatch(deleteFromCart(id)) }
                aria-label="delete the product">
            <span title="delete the product">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M9.80303 1.13807C10.0634 0.877722 10.0634 0.455612 9.80303 0.195262C9.54268 -0.0650874 9.12057 -0.0650874 8.86022 0.195262L4.99914 4.05633L1.13807 0.195262C0.877722 -0.0650874 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650874 0.877722 0.195262 1.13807L4.05633 4.99914L0.195262 8.86022C-0.0650874 9.12057 -0.0650874 9.54268 0.195262 9.80303C0.455612 10.0634 0.877722 10.0634 1.13807 9.80303L4.99914 5.94195L8.86022 9.80303C9.12057 10.0634 9.54268 10.0634 9.80303 9.80303C10.0634 9.54268 10.0634 9.12057 9.80303 8.86022L5.94195 4.99914L9.80303 1.13807Z"
                    fill="#2D3440"/>
            </svg>
            </span>
        </button>
      </div>
    </div>
  )
}

export default BasketPreviewCard