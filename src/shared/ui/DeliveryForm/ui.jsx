import TooltipInfo from '@shared/ui/TooltipInfo'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../Button/ui'
import Input from '@shared/ui/Input'
import './DeliveryForm.scss'


let deliverySchema = yup.object({
  data: yup.date().required('Заполните обязательное поле!').typeError('Введите дату'),
  phone: yup.number().required('Заполните обязательное поле!').typeError('Введите номер телефона'),
  address: yup.string().required('Заполните обязательное поле!'),
})

const DeliveryForm = () => {
  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm({
    resolver: yupResolver(deliverySchema)
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={ handleSubmit(onSubmit) } noValidate className="delivery__form">
      <div className="delivery__form-text text text--gray"><p>Укажите адрес и дату доставки, и мы свяжемся с вами, чтобы
        подтвердить заказ.</p></div>
      <div className="delivery__form-actions">
        <Input
          className="delivery__form-data"
          label={ <>Дата <TooltipInfo>Введите сюда полную дату</TooltipInfo></> }
          placeholder="01.04.2020"
          register={ register }
          registerName="data"
          id="data"
          type="text"
          error={ errors?.data?.message }
          hasError
        />
        <Input
          className="delivery__form-tel"
          label="Телефон"
          placeholder="+7 800 999-00-00"
          register={ register }
          registerName="phone"
          id="phone"
          type="tel"
          error={ errors?.phone?.message }
          hasError
        />
        <Input
          className="delivery__form-adress"
          label={
            <>
              Адрес
              <TooltipInfo>Введите сюда свой адресс не указывая своего города</TooltipInfo>
            </> }
          placeholder="ул. Большая Конюшенная, 19/8"
          register={ register }
          registerName="address"
          id="address"
          type="text"
          error={ errors?.address?.message }
          hasError
        />
      </div>
      <Button type="submit" className="delivery__form-button button--red">Отправить</Button>

    </form>
  )
}

export default DeliveryForm