import RadioButtons from '@shared/ui/RadioButtons'


const SortRadio = (props) => {
  const { register } = props
  return (
    <RadioButtons
      className='sort-products__radio'
      register={register}
      registerName='radio'
      id='radio'
      label='Жирность:'
      radios={[
        {value: 'zero', text: '0%'},
        {value: 'beforeTen', text: 'до 10%', checked: true},
        {value: 'beforeThirty', text: 'до 30%'},
        {value: 'afterThirty', text: 'выше 30%'},
      ]}
    />
  )
}

export default SortRadio