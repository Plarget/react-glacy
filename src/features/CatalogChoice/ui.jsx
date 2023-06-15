import { NavLink } from 'react-router-dom'
import './CatalogChoice.scss'


const CatalogChoice = () => {
  return (
    <div className="tooltip__catalog catalog-choice">
      <h3 className="catalog-choice__title">Новинки</h3>
      <hr className="catalog-choice__line"/>
      <NavLink to="catalog/butter" className="catalog-choice__link">Сливочное</NavLink>
      <NavLink to="catalog/sherbet" className="catalog-choice__link">Щербеты</NavLink>
      <NavLink to="catalog/fruit-ice" className="catalog-choice__link">Фруктовый лед</NavLink>
      <NavLink to="catalog/melorin" className="catalog-choice__link">Мелорин</NavLink>
    </div>
  )
}

export default CatalogChoice
