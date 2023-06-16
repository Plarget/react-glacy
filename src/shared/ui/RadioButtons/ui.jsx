import './RadioButtons.scss'
import classNames from 'classnames'


const RadioButtons = (props) => {
  const {
    className,
    register,
    registerName,
    id,
    label,
    radios
  } = props
  return (
    <div className={classNames('radio', className)}>
      { label && <label className="radio__label">{ label }</label> }
      <div className="radio__body">
        { radios.map((element, index) => {
          const idForElement = id + index
          return (
            <div className='radio__wrapper'>
              <input
                className="radio__control"
                { ...register(registerName) }
                key={ index }
                id={ idForElement }
                value={element.value}
                type="radio"
                checked={element.checked}
              />
              <label className="radio__control-label" htmlFor={ idForElement }>{ element.text }</label>
            </div> )
        }) }
      </div>
    </div>
  )
}

export default RadioButtons