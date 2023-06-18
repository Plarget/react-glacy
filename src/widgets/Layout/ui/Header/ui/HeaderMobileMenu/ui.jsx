import './HeaderMobileMenu.scss'
import HeaderMenu from '@widgets/Layout/ui/Header/ui/HeaderMenu'
import HeaderActions from '@widgets/Layout/ui/Header/ui/HeaderActions'
import classNames from 'classnames'
import { forwardRef } from 'react'


const HeaderMobileMenu = forwardRef(function HeaderMobileMenu(props, ref) {
  const { isMenuOpen } = props
  return (
    <div
      className={ classNames('header__mobile mobile-menu',
        { 'is-open': isMenuOpen }) }
      ref={ ref }
    >
      <HeaderMenu/>
      <HeaderActions/>
    </div>
  )
})

export default HeaderMobileMenu