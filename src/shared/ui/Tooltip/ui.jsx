import classNames from 'classnames'
import { useRef } from 'react'
import './Tooltip.scss'
import useClickOutside from '@shared/hooks/useClickOutside'
import useToggle from '@shared/hooks/useToggle'


const Tooltip = ( props ) => {
  const {
    renderTriggerComponent,
    children,
    className,
  } = props
  const ref = useRef( null )
  const [ isTooltipOpened, toggleTooltipOpened, setTooltipOpened ] = useToggle( false )
  useClickOutside( ref, () => {
    setTooltipOpened(false)
  } )

  return (
    <div
      className={ classNames(
        'tooltip',
        { 'is-active': isTooltipOpened } ) }
      ref={ ref }
    >
      { renderTriggerComponent( { onClick: toggleTooltipOpened } ) }
      <div
        className={ classNames( 'tooltip__body', className ) }
      >
        { children }
      </div>
    </div> )
}

export default Tooltip