import Button from '@shared/ui/Button/ui'
import { Link } from 'react-router-dom'
import Input from '@shared/ui/Input'
import { useForm } from 'react-hook-form'
import './SignIn.scss'


const SignIn = () => {
  const {
    register,
    reset,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form className="tooltip__form-sign form-sign" onSubmit={ handleSubmit(onSubmit) }>
      <h3 className="form-sign__label label">Личный кабинет</h3>
      <Input
        className="form-sign__input"
        register={ register }
        registerName="login"
        type="text"
        placeholder="Логин"
      />
      <Input
        className="form-sign__input"
        register={ register }
        registerName="password"
        type="password"
        placeholder="Пароль"
      />
      <div className="form-sign__actions">
        <Button className="button--red">Войти</Button>
        <div className="form-sign__actions-links">
          <Link to="reg" className="form-sign__actions-link">Забыли пароль?</Link>
          <Link to="forget-password" className="form-sign__actions-link">Регистрация</Link>
        </div>
      </div>
    </form>
  )
}

export default SignIn