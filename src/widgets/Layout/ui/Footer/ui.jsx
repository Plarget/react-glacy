import { Link } from 'react-router-dom'
import SocialGroup from '@shared/ui/SocialGroup'
import './Footer.scss'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body container">
        <SocialGroup/>
        <div className="footer__provider">
          <h3 className="footer__label">Для поставщиков</h3>
          <Link to="documents">Наши документы</Link>
          <Link to="about">О производстве</Link>
          <Link to="standarts">Экологические стандарты</Link>
        </div>
        <div className="footer__info">
          <div className="footer__logo">
            <a href="/" className="footer__link">
              <img width="93" height="26" src="images/logo/footerLogo.png" alt="html academy"
                   className="footer__logo-image"/>
            </a>
          </div>
          <div className="footer__text">Сделано в <a href="/" className="footer__text-link">.html academy</a> © 2021
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer