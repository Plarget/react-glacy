import { ReactSVG } from 'react-svg'
import './TooltipInfo.scss'

const TooltipInfo = (props) => {
  const {children} = props
  return (
      <div className='tooltip-info'>
        <ReactSVG src='images/icons/info.svg'/>
        <div className="tooltip-info__tooltip">
         <p>{children}</p>
        </div>
      </div>
  )
}

export default TooltipInfo