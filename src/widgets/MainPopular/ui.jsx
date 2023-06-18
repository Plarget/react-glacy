import ProductCard from '@shared/ui/ProductCard'
import products from '@shared/data/products'
import './MainPopular.scss'


const MainPopular = () => {
  const popularProducts = [...products]
  popularProducts.sort((a, b) => b.popular - a.popular)
  return (
    <section className="popular">
      <div className="popular__inner container">
        <h2 className="popular__title title">Попробуйте самые популярные вкусы нашего мороженого</h2>
        <div className="popular__body">
          { popularProducts.slice(0, 4).map((product, index) => {
            return <ProductCard product={ product } key={ product.id }/>
          }) }
        </div>
      </div>
    </section>
  )
}

export default MainPopular