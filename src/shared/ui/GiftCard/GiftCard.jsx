import './styles.scss'
import Button from "../Button/ui";
import {chooseCard} from "./lib/helper/chooseCard";

export const GiftCard = (props) => {
  const {className, choice} = props
  const {label,text,image} = chooseCard(choice)
  return (
      <div className={`gift-card ${className}`}>
        <div className="gift-card__about">
          <h3 className="gift-card__label label">{label}</h3>
          <div className="gift-card__text text"><p>{text}</p></div>
          <Button className="gift-card__button button--white">Хочу подарок</Button>
        </div>
        <img width='219' height='268' loading='lazy' src={image} alt="raspberry" className="gift-card__image"/>
  
      </div>
  )
}