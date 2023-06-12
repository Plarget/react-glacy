import { Link } from 'react-router-dom'


const Logo = ( props ) => {
  const { className } = props
  return (
    <div className={ className }>
      <Link aria-label="go to home page" to="/" className="header__logo-link">
        <span title="to home page">
          <img src="images/logo/mainLogo.png" alt="logo" className="header__logo-image"/>
        </span>
      </Link>
    </div>
  )
}

export default Logo