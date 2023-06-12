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
      { iconBefore }
      { children }
      { iconAfter }
    </button> )
}

export default Button
