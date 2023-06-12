import './styles.scss'
import {ProductCard} from "../../shared/ui/ProductCard/ProductCard";
import Products from '@/shared/data/Products'
 export const MainPopular = () => {


  return (
     <section className='popular'>
       <div className="popular__inner container">
         <h2 className="popular__title title">Попробуйте самые популярные вкусы нашего мороженого</h2>
         <div className="popular__body">
           {Products.map((product) => {
             return <ProductCard product={product}  key={product.id}/>
           })
           }

         </div>
       </div>
     </section>
  )
}