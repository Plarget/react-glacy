import Logo from '@shared/ui/Logo'
import { useSelector } from 'react-redux'
import HeaderBurgerButton from './ui/HeaderBurgerButton'
import HeaderMenu from '@widgets/Layout/ui/Header/ui/HeaderMenu'
import HeaderActions from '@widgets/Layout/ui/Header/ui/HeaderActions'
import HeaderMobileMenu from '@widgets/Layout/ui/Header/ui/HeaderMobileMenu/ui'
import useToggle from '@shared/hooks/useToggle'
import './Header.scss'


const Header = () => {
  const [ isMenuOpen, toggleIsMenuOpen ] = useToggle( false )
  const cart = useSelector( state => state.cartReducer )
  const cartLength = Object.values( cart ).length
  return (
    <header className="header">
      <div className="header__body container">
        <Logo className="header__logo"/>
        <HeaderMenu/>
        <HeaderActions cartLength={ cartLength }/>
        <HeaderBurgerButton toggleMenu={ toggleIsMenuOpen }/>
        <HeaderMobileMenu isMenuOpen={ isMenuOpen }/>
      </div>
    </header>
  )
}

export default Header