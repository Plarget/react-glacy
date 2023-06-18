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
        {
          id: 'fat-0',
          value: '0%',
          text: '0%'
        },
        {
          id: 'fat-1',
          value: 'beforeTen',
          text: 'до 10%',
          isChecked: true
        },
        {
          id: 'fat-2',
          value: '< 10%',
          text: 'до 30%'
        },
        {
          id: 'fat-3',
          value: '> 30%',
          text: 'выше 30%'
        },
      ]}
    />
  )
}

export default SortRadio