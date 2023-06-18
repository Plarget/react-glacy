import CheckBoxesGroup from '@shared/ui/CheckBoxesGroup'


const SortCheckBox = (props) => {
  const { register } = props
  return (
    <CheckBoxesGroup
      className='sort-products__checkboxes'
      register={ register }
      label="Наполнители:"
      checkboxes={ [
        { name: 'chocolate', text: 'шоколадные', isChecked: true },
        { name: 'sugar', text: 'сахарные посыпки', isChecked: true },
        { name: 'fruit', text: 'фрукты' },
        { name: 'syrup', text: 'сиропы' },
      ] }
    />
  )
}

export default SortCheckBox