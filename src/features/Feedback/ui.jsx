import Button from '@shared/ui/Button/ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '@shared/ui/Input'
import './Feedback.scss'


const schemaFeedback = yup.object({
  fullName: yup.string().required('Обязательно для заполнения'),
  email: yup.string().required('Обязательно для заполнения').email('Email введен некорректно'),
  feedback: yup.string().required('Обязательно для заполнения').min(10, 'Минимум 10 символов').max(200, 'Максимум 200 символов')
})
const Feedback = () => {
  const {
    register,
    formState: {
      errors
    },
    reset,
    handleSubmit
  } = useForm({
    resolver: yupResolver(schemaFeedback)
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form className="feedback-form" onSubmit={ handleSubmit(onSubmit) }>
      <h2 className="feedback-form__label label">Мы обязательно ответим вам!</h2>
      <Input
        className="feedback-form__full-name"
        register={ register }
        registerName="fullName"
        placeholder="Имя и фамилия"
        type="text"
        error={ errors?.fullName?.message }
        hasError
      />
      <Input
        className="feedback-form__email"
        register={ register }
        registerName="email"
        placeholder="email@example.com"
        type="text"
        error={ errors?.email?.message }
        hasError
      />
      <Input
        className="feedback-form__feedback"
        register={ register }
        registerName="feedback"
        placeholder="В свободной форме"
        type="textarea"
        error={ errors?.feedback?.message }
        hasError
      />
      <div className="feedback-form__wrapper-button">
        <Button type="onSubmit" className="feedback-form__button button--red">Отправить</Button>
      </div>
    </form>
  )
}

export default Feedback