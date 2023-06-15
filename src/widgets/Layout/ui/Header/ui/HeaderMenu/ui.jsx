import Tooltip from '@shared/ui/Tooltip/ui'
import Button from '@shared/ui/Button'
import CatalogChoice from '@features/CatalogChoice'
import { NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import './HeaderMenu.scss'


const HeaderMenu = (props) => {
  const { className } = props
  return (
    <nav className={ classNames('header__menu', className) }>
      <ul className="header__menu-list">
        <li className="header__menu-item">
          <Tooltip
            className="tooltip__body--very-small"
            renderTriggerComponent={ (props = {}) => (
              <Button
                className="header__menu-button button--link is-rotate"
                { ...props }
              >
                Каталог
                <ReactSVG src="images/icons/arrow.svg"/>
              </Button>
            ) }
          >
            <CatalogChoice/>
          </Tooltip>
        </li>
        <li className="header__menu-item">
          <NavLink to="payment" className="header__menu-link">Доставка и оплата</NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to="about" className="header__menu-link">О компании</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu