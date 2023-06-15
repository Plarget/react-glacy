import './InfoItem.scss'


const InfoItem = (props) => {
  const { className, icon, children } = props
  return (
    <div className={ `info-item ${ className }` }>
      <div className="info-item__image-wrapper">
        { icon }
      </div>
      <div className="info-item__text text text--gray">
        <p>{ children }</p>
      </div>
    </div>
  )
}

export default InfoItem