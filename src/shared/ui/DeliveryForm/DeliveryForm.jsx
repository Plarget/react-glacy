import {TooltipInfo} from "./ui/TooltipInfo/TooltipInfo";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './styles.scss'
import Button from "../Button/ui";

let deliverySchema = yup.object({
  data: yup.date().required('Заполните обязательное поле!').typeError("Введите дату"),
  phone : yup.number().required('Заполните обязательное поле!').typeError("Введите номер телефона"),
  adress: yup.string().required('Заполните обязательное поле!'),
})

export const DeliveryForm = () => {
  const {
    register, handleSubmit, formState:{ errors},reset
  } = useForm({
    resolver: yupResolver(deliverySchema)
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
      <form onSubmit={handleSubmit(onSubmit)}  noValidate className="delivery__form" >
        <div className="delivery__form-text text text--gray"><p>Укажите адрес и дату доставки, и мы свяжемся с вами, чтобы подтвердить заказ.</p></div>
        <div className="delivery__form-actions">
          <label htmlFor="" className="delivery__form-data">
            <h3 className="delivery__form-label label label--tiny">Дата <TooltipInfo>Введите сюда полную дату</TooltipInfo></h3>
            <input {...register('data')} placeholder='01.04.2020' type="text" className="delivery__form-input-data input"/>
            <div className="delivery__form-error error">{errors?.data?.message && errors?.data?.message}</div>
          </label>
          <label htmlFor="" className="delivery__form-tel">
            <h3 className="delivery__form-label label label--tiny">Телефон</h3>
            <input {...register('phone')} placeholder='+7 800 999-00-00' type="tel" className="delivery__form-input-tel input"/>
            <div className="delivery__form-error error">{errors?.phone?.message && errors.phone.message}</div>
          </label>
          <label htmlFor="" className="delivery__form-adress">
            <h3 className="delivery__form-label label label--tiny">Адрес  <TooltipInfo>Введите сюда свой адресс не указывая своего города</TooltipInfo></h3>
            <input {...register('adress')} placeholder='ул. Большая Конюшенная, 19/8' type="text" className="delivery__form-input-adress input"/>
            <div className="delivery__form-error error">{errors?.adress?.message && errors.adress.message}</div>

          </label>
        </div>
        <Button type='submit' className="delivery__form-button button--red">Отправить</Button>

      </form>
  )
}