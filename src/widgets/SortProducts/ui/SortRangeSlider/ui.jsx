import RangeSliderCustom from '@shared/ui/RangeSliderCustom'
import { useState } from 'react'


const SortRangeSlider = (props) => {
  const { register } = props
  const [value, setValue] = useState([100, 500])
  return (
    <RangeSliderCustom
      className='sort-products__range-slider'
      register={ register }
      name="price"
      label={ `Цена: ${value[0]} ₽ – ${value[1]} ₽` }
      value={ value }
      onInput={ setValue }
      minMax={[0,800]}
    />
  )
}

export default SortRangeSlider