import classNames from 'classnames'
import './IconButton.scss'


const IconButton = (props) => {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <button
      className={ classNames('icon-button', className) }
      { ...rest }
    >{ children }
    </button>
  )
}

export default IconButton