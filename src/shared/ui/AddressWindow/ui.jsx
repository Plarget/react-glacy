import Button from '../Button/ui'
import './AddressWindow.scss'


const AddressWindow = (props) => {
  const { togglePopup } = props
  return (
    <div className="address__window">
      <address className="address__window-body">
        <div className="address__window-text text text--gray">Адрес главного офиса и офлайн-магазина:</div>
        <a href="maps:ll=59.939251, 30.317931" className="address__window-address label label--small">наб. реки
          Карповки, 5 лит П, Санкт-Петербург</a>
        <div className="address__window-text text text--gray">Для заказов по телефону:</div>
        <a href="tel:+78128121212" className="address__window-link label label--small">+7 (812) 812-12-12</a>
        <div className="address__window-semi-text text text--gray">(с 10 до 20 ежедневно)</div>
      </address>
      <Button onClick={ togglePopup } className="address__window-button button--red">Форма обратной связи</Button>
    </div>
  )
}

export default AddressWindow