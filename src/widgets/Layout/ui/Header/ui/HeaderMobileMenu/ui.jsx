import './HeaderMobileMenu.scss'
import HeaderMenu from '@widgets/Layout/ui/Header/ui/HeaderMenu'
import HeaderActions from '@widgets/Layout/ui/Header/ui/HeaderActions'
import classNames from 'classnames'


const HeaderMobileMenu = ( props ) => {
  const { isMenuOpen } = props
  return (
    <div
      className={ classNames( 'header__mobile mobile-menu',
        { 'is-open': isMenuOpen } ) }
    >
      <HeaderMenu/>
      <HeaderActions/>
    </div>
  )
}

export default HeaderMobileMenu