import Tooltip from '@shared/ui/Tooltip/ui'
import Button from '@shared/ui/Button'
import CatalogChoice from '@features/CatalogChoice/CatalogChoice'
import { Link } from 'react-router-dom'
import './HeaderMenu.scss'
import { ReactSVG } from 'react-svg'


const HeaderMenu = () => {
  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        <li className="header__menu-item">
          <Tooltip
            modifier="very-small"
            renderTriggerComponent={ ( props = {} ) => (
              <Button
                className="header__menu-button button--link"
                { ...props }
              >
                <ReactSVG src="images/icons/cart.svg"/>
                Каталог
              </Button>
            ) }
          >
            <CatalogChoice/>
          </Tooltip>
        </li>
        <li className="header__menu-item"><Link to="payment" className="header__menu-link">Доставка и
          оплата</Link></li>
        <li className="header__menu-item"><Link to="about" className="header__menu-link">О компании</Link></li>
      </ul>
    </nav>
  )
}

export default HeaderMenu