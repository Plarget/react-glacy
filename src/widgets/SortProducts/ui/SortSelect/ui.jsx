import Select from '@shared/ui/Select'


const SortSelect = (props) => {
  const { register }= props
  return (
    <Select
      className='sort-products__select'
      label='Сортировка:'
      id='selector'
      register={register}
      registerName='selector'
      options={[
        {value: 'popular', text: 'по популярности'},
        {value: 'poor', text: 'от дешового', checked: true},
        {value: 'rich', text: 'от дорогого'},
      ]}
    />
  )
}

export default SortSelect