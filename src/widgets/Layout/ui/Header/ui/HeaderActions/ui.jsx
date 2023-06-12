import PhoneLink from '@shared/ui/PhoneLink'
import Tooltip from '@shared/ui/Tooltip/ui'
import Button from '@shared/ui/Button'
import QuickSearch from '@features/QuickSearch/QuickSearch'
import SignIn from '@features/SignIn/SignIn'
import BasketPreview from '@features/BasketPreview/ui'
import { ReactSVG } from 'react-svg'
import './HeaderActions.scss'


const HeaderActions = ( props ) => {
  const { cartLength } = props


  return (
    <div className="header__actions">
      <PhoneLink/>
      <Tooltip
        className="tooltip__body--small"
        renderTriggerComponent={ ( props = {} ) => (
          <Button
            className="header__actions-button"
            { ...props }
          >
            <ReactSVG src="images/icons/search.svg"/>
          </Button>
        ) }
      >
        <QuickSearch/>
      </Tooltip>
      <Tooltip
        renderTriggerComponent={ ( props = {} ) => (
          <Button
            className="header__actions-button"
            { ...props }
          >
            <ReactSVG src="images/icons/login.svg"/> Вход
          </Button>
        ) }
      >
        <SignIn/>
      </Tooltip>
      <Tooltip
        className="tooltip__body--box-shadow"
        renderTriggerComponent={ ( props = {} ) => (
          <Button
            className="header__actions-button"
            { ...props }
          >
            <ReactSVG src="images/icons/cart.svg"/>
            { cartLength > 0 ? cartLength > 1 ? `${ cartLength } товара` : `${ cartLength } товар` : 'товара нет' }
          </Button>
        ) }
      >
        <BasketPreview/>
      </Tooltip>
    </div>
  )
}

export default HeaderActions