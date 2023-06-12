import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Button from '@shared/ui/Button/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import './Subscribe.scss'


const sсhema = yup.object( {
  email: yup.string().required( 'Заполните поле' ).email( 'Вы ввели неправильный email' ),
} )
const Subscribe = ( props ) => {
  const { className } = props
  const { register, handleSubmit, formState: { errors }, reset } = useForm( {
    resolver: yupResolver( sсhema )
  } )

  const onSubmit = ( data ) => {
    console.log( data )
    reset()
  }


  return (
    <div className={ `subscribe  ${ className }` }>
      <div className="subscribe__inner">
        <div className="subscribe__text text text--gray">
          <p>
            Подпишитесь на нашу сладкую рассылку и будьте всегда
            в курсе всего самого вкусного, что у нас происходит. Обещаем не спамить и не слать всякой ненужной ерунды.
            Честно =)
          </p>
        </div>
        <form className="subscribe__form" onSubmit={ handleSubmit( onSubmit ) } noValidate>
          <label className="subscribe__label">
            <input
              className="subscribe__input input"
              { ...register( 'email' ) }
              placeholder="email@example.com"
              type="email"
            />
            { errors?.email?.message && <div className="subscribe__error error">{ errors?.email?.message }</div> }
          </label>
          <Button className="subscribe__button button--red">Отправить</Button>
        </form>
      </div>
    </div>

  )
}

export default Subscribe