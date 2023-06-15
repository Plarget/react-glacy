import GiftCard from '@shared/ui/GiftCard'
import './MainGift.scss'


const MainGift = () => {
  return (
    <section className="gifts">
      <div className="gifts__inner container">
        <h2 className="gifts__title title">Заказывайте мороженое и получайте подарки!</h2>
        <div className="gifts__body">
          <GiftCard
            className="gifts__card"
            title="Маршмеллоу даром!"
            description="При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку малинового варенья бесплатно."
            imgSrc="images/content/raspberry.png"
          />
          <GiftCard
            className="gifts__card"
            title="Маршмеллоу даром!"
            description="При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок совершенно бесплатно."
            imgSrc="images/content/marshmallow.png"
          />
        </div>
      </div>
    </section>
  )
}

export default MainGift