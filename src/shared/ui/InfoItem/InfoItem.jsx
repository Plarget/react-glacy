import './styles.scss'
import {iconInfo} from "./lib/helper/iconInfo";

export const InfoItem = (props) => {
  const {className,icon,children} = props
  return (
      <div className={`info-item ${className}`}>
        <div className="info-item__image-wrapper">
          {iconInfo(icon)}
        </div>
        <div className="info-item__text text text--gray">
          <p>{children}</p>
        </div>
      </div>
  )
}