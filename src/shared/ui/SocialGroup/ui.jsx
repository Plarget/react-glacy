import { ReactSVG } from 'react-svg'
import './SocialGroup.scss'


const SocialGroup = () => {
  return (
    <ul className="social-group">
      <li className="social-group__item">
        <a href="/" className="social-group__link">
          <ReactSVG className="react-svg" src="/images/icons/social/telegram.svg"/>
        </a>
      </li>
      <li className="social-group__item">
        <a href="/" className="social-group__link">
          <ReactSVG className="react-svg" src="/images/icons/social/vk.svg"/>
        </a>
      </li>
      <li className="social-group__item">
        <a href="/" className="social-group__link">
          <ReactSVG className="react-svg" src="/images/icons/social/youtube.svg"/>
        </a>
      </li>
    </ul>
  )
}

export default SocialGroup