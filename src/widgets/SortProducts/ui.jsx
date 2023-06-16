import { useForm } from 'react-hook-form'
import SortSelect from '@widgets/SortProducts/ui/SortSelect'
import SortRadio from '@widgets/SortProducts/ui/SortRadio'
import './SortProducts.scss'


const SortProducts = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="sort-products">
      <div className="sort-products__body container">
        <form className="sort-products__form" onSubmit={ handleSubmit(onSubmit) }>
          <SortSelect register={ register }/>
          <SortRadio register={ register }/>
        </form>
      </div>
    </div>
  )
}

export default SortProducts