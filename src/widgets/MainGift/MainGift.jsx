import './styles.scss'
import {GiftCard} from "../../shared/ui/GiftCard/GiftCard";

export const MainGift = () => {
  return (
      <section className="gifts">
        <div className="gifts__inner container">
          <h2 className="gifts__title title">Заказывайте мороженое и получайте подарки!</h2>
          <div className="gifts__body">
            <GiftCard choice='raspberry' className='gifts__card' />
            <GiftCard choice='marshmallow' className='gifts__card'/>
          </div>

        </div>


      </section>
  )
}