import { useForm } from 'react-hook-form'
import SortSelect from '@widgets/SortProducts/ui/SortSelect'
import SortRadio from '@widgets/SortProducts/ui/SortRadio'
import Button from '@shared/ui/Button'
import SortCheckBox from '@widgets/SortProducts/ui/SortCheckBox'
import SortRangeSlider from '@widgets/SortProducts/ui/SortRangeSlider'
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
          <SortRangeSlider register={ register }/>
          <SortRadio register={ register }/>
          <SortCheckBox register={ register }/>
          <Button className="sort-products__button button--biger">Применить</Button>
        </form>
      </div>
    </div>
  )
}

export default SortProducts