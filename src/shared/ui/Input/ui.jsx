import classNames from 'classnames'
import './Input.scss'


const Input = (props) => {
  const {
    type,
    className,
    register,
    registerName,
    id,
    label,
    error,
    hasError,
    ...rest
  } = props

  const isTextArea = type === 'textarea'
  const Component = isTextArea ? 'textarea' : 'input'


  return (
    <div className={ classNames('input', className) }>
      { label && ( <label className="input__label" htmlFor={ id }>{ label }</label> ) }
      <Component
        className={ classNames('input__control',
          { 'textarea': isTextArea }
        ) }
        id={ id }
        { ...register(registerName) }
        { ...rest }
      />
      { hasError && ( <span className="input__error">{ error }</span> ) }
    </div>
  )
}

export default Input