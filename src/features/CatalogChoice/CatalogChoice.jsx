import './styles.scss'
import {Link} from "react-router-dom";
const CatalogChoice = () => {
  return (
      <div className="tooltip__catalog catalog-choice">
        <h3 className="catalog-choice__title">Новинки</h3>
        <hr className='catalog-choice__line'/>
        <Link to='catalog/butter' className="catalog-choice__link">Сливочное</Link>
        <Link to='catalog/sherbet' className="catalog-choice__link">Щербеты</Link>
        <Link to='catalog/fruit-ice' className="catalog-choice__link">Фруктовый лед</Link>
        <Link to='catalog/melorin' className="catalog-choice__link">Мелорин</Link>
      </div>
  )
}

export default CatalogChoice
