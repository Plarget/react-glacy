import Logo from '@shared/ui/Logo'
import { useSelector } from 'react-redux'
import HeaderBurgerButton from './ui/HeaderBurgerButton'
import HeaderMenu from '@widgets/Layout/ui/Header/ui/HeaderMenu'
import HeaderActions from '@widgets/Layout/ui/Header/ui/HeaderActions'
import HeaderMobileMenu from '@widgets/Layout/ui/Header/ui/HeaderMobileMenu/ui'
import useToggle from '@shared/hooks/useToggle'
import { useRef } from 'react'
import useBodyLock from '@shared/hooks/useBodyLock'
import './Header.scss'



const Header = () => {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)
  const ref = useRef()
  const bodyLock = useBodyLock(isMenuOpen, ref)
  const cart = useSelector(state => state.cartReducer)
  const cartLength = Object.values(cart).length
  const toggleMenu = () => {
    toggleIsMenuOpen()
    bodyLock()
  }
  return (
    <header className="header">
      <div className="header__body container">
        <Logo className="header__logo"/>
        <HeaderMenu className="hidden-mobile"/>
        <HeaderActions className="hidden-mobile" cartLength={ cartLength }/>
        <HeaderBurgerButton toggleMenu={ toggleMenu } isMenuOpen={ isMenuOpen }/>
        <HeaderMobileMenu isMenuOpen={ isMenuOpen } ref={ ref }/>
      </div>
    </header>
  )
}

export default Header