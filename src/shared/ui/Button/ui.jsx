import classNames from 'classnames'
import './Button.scss'


const Button = ( props ) => {
  const {
    children,
    className,
    iconBefore,
    iconAfter,
    ...rest
  } = props

  return (
    <button
      { ...rest }
      className={ classNames( 'button', className ) }
    >
      { children }
    </button> )
}

export default Button
