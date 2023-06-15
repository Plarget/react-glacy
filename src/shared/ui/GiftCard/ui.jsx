import Button from '../Button/ui'
import './GiftCard.scss'


const GiftCard = (props) => {
  const { className, title, description, imgSrc } = props
  return (
    <div className={ `gift-card ${ className }` }>
      <div className="gift-card__about">
        <h3 className="gift-card__label label">{ title }</h3>
        <div className="gift-card__text text"><p>{ description }</p></div>
        <Button className="gift-card__button button--white">Хочу подарок</Button>
      </div>
      <img width="219" height="268" loading="lazy" src={ imgSrc } alt="raspberry" className="gift-card__image"/>

    </div>
  )
}

export default GiftCard