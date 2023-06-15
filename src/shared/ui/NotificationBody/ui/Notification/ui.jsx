import './Notification.scss'
import { ReactSVG } from 'react-svg'

const Notification = (props) => {
  const { text } = props
  return (
    <div className='notification__item'>
      <ReactSVG src='images/icons/info-big.svg'/>
      <h3 className='notification__label label label--tiny'>{ text }</h3>
    </div>
  )
}

export default Notification