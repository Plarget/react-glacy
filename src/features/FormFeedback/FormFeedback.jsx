import './styles.scss'
import Button from "@shared/ui/Button/ui";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaFeedback = yup.object({
  fullName: yup.string().required('Обязательно для заполнения'),
  email: yup.string().required('Обязательно для заполнения').email('Email введен некорректно'),
  feedback: yup.string().required('Обязательно для заполнения').min(10,'Минимум 10 символов').max(200, 'Максимум 200 символов')
});
export const FormFeedback = () => {
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
      <form className='form-feedback' onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-feedback__label label">Мы обязательно ответим вам!</h2>
        <div className="form-feedback__full-name">
          <input {...register('fullName')} placeholder='Имя и фамилия' type="text" className="form-feedback__input input"/>
          <div className="form-feedback__error error">{errors?.fullName?.message}</div>
        </div>
        <div  className="form-feedback__email">
          <input {...register('email')} placeholder='email@example.com' type="text" className="form-feedback__input input"/>
          <div className="form-feedback__error error">{errors?.email?.message}</div>
        </div>
        <div  className="form-feedback__feedback">
          <textarea {...register('feedback')} placeholder='В свободной форме'  className="form-feedback__textarea input"></textarea>
          <div className="form-feedback__error error">{errors?.feedback?.message}</div>
        </div>
         <div className="form-feedback__wrapper-button">
          <Button type='onSubmit' className="form-feedback__button button--red">Отправить</Button>
        </div>
       </form>
  )
}