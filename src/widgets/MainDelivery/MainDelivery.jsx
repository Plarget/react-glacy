import './styles.scss'
 import {DeliveryForm} from "../../shared/ui/DeliveryForm/DeliveryForm";
export const MainDelivery = () => {
  return (
      <section className='delivery'>
        <div className="delivery__inner container">
          <div className="delivery__body">
            <article className="delivery__about">
              <h2 className="delivery__title title">Доставка любимого мороженого на дом</h2>
              <div className="delivery__text text text--gray">
                <p>
                  Хочется полакомиться любимым десертом, но нет времени съездить в магазин? Закажите доставку мороженого на дом, и курьер привезёт вам ваш заказ в течение часа!
                </p>
              </div>
            </article>
            <DeliveryForm/>
          </div>
        </div>
      </section>
  )
}