import classNames from 'classnames'
import './IconButton.scss'


const IconButton = (props) => {
  const { className, children } = props
  return (
    <button className={ classNames('icon-button', className) }>{ children }</button>
  )
}

export default IconButton