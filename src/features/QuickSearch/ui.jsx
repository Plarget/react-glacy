import { useForm } from 'react-hook-form'
import Input from '@shared/ui/Input'
import './QuickSearch.scss'


const QuickSearch = () => {
  const {
    register,
    reset,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form className="tooltip__form-search form-search" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="form-search__input"
        register={register}
        registerName='search'
        type="text"
        placeholder="Поиск по сайту"
      />
    </form>
  )
}

export default QuickSearch