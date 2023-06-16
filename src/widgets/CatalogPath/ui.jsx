import './CatalogPath.scss'
import { NavLink } from 'react-router-dom'


const CatalogPath = () => {
  return (
    <div className="catalog-path">
      <div className="catalog-path__body container">
        <ul className="catalog-path__list">
          <li className="catalog-path__item">
            <NavLink className="catalog-path__link" to="/">Главная</NavLink>
          </li>
          <li className="catalog-path__item">
            <NavLink className="catalog-path__link" to="/catalog" end>Каталог</NavLink>
          </li>
          <li className="catalog-path__item">
            <NavLink className="catalog-path__link" to="/catalog/butter">Сливочное мороженое</NavLink>
          </li>
        </ul>
        <h2 className="catalog-path__title title">Сливочное мороженое</h2>
      </div>
    </div>
  )
}

export default CatalogPath