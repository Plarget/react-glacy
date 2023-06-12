import './styles.scss'
import Button from "@shared/ui/Button/ui";
import {Link} from "react-router-dom";

const SignIn = () => {
  return (
      <form className="tooltip__form-sign form-sign">
        <h3 className="form-sign__label label">Личный кабинет</h3>
        <input type="login"  placeholder='Логин' className="form-sign__input input"/>
        <input type="password" placeholder='Пароль' className="form-sign__input input"/>
        <div className="form-sign__actions">
          <Button className='button--red'>Войти</Button>
          <div className="form-sign__actions-links">
            <Link to='reg' className="form-sign__actions-link">Забыли пароль?</Link>
            <Link to='forget-password' className="form-sign__actions-link">Регистрация</Link>
          </div>
         </div>
      </form>
  )
}

export default SignIn