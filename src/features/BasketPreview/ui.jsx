import { useSelector } from 'react-redux'
import BasketPreviewCard from './ui/BasketPreviewCard'
import Button from '@shared/ui/Button/ui'
import './BasketPreview.scss'


const BasketPreview = () => {
  const cart = useSelector( state => state.cartReducer )
  const cartLength = Object.values( cart ).length
  const totalPrice = Object.values( cart ).reduce( ( acc, item ) => acc + ( item.price * item.amount ), 0 )

  if ( !cartLength ) {
    return <div className="basket basket__body">
      { !cartLength && <div className="basket__not-found">Ваша корзина пока пуста</div> }

    </div>
  }
  return <div className="basket basket__body">
    <h3 className="basket__label label">Корзина</h3>
    <div className="basket__column">
      { Object.entries( cart ).map( ( element ) => {
        return <BasketPreviewCard key={ element[0] } id={ element[0] } product={ element[1] }/>
      } ) }
    </div>
    <hr className="basket__line"/>
    <div className="basket__actions">
      <Button className="basket__button button--red">Оформить заказ</Button>
      <div className="basket__total-price label label--very-small">Итого: { totalPrice } ₽</div>
    </div>
  </div>
}

export default BasketPreview