import classNames from 'classnames'
import { ReactSVG } from 'react-svg'
import './Select.scss'


const Select = (props) => {
  const {
    className,
    label,
    id,
    options,
    register,
    registerName
  } = props
  return (
    <div className={ classNames('select', className) }>
      { label && <label className="select__label" htmlFor={ id }>{ label }</label> }
      <div className="select__wrapper">
        <select className="select__control" { ...register(registerName) } id={ id }>
          { options.map((element, index) => {
            return (
              <option
                className="select__option"
                key={ index }
                value={ element.value }
              >
                { element.text }
              </option> )
          }) }
        </select>
        <ReactSVG className="select__icon react-svg" src="images/icons/arrow.svg"/>
      </div>
    </div>

  )
}

export default Select