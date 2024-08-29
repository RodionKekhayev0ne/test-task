import React, {useEffect, useState} from 'react';
import '../css/RegAuthStyles.css';
import Bar from "./Bar";
import { Link, useNavigate } from 'react-router-dom';

const RegAuthPage = () => {

    const [auth, setAuth] = useState(true)
    const navigate = useNavigate();
    const forgotpass = () => {
        console.log("Forget password")
    }

    const changeForm = (status) => {
        setAuth(status)
    }

    function Entry() { // Убедитесь, что это именно React-компонент
            navigate('/home');
    }

    return (
        <div>
            <Bar/>
            <div className={'regauth-container'}>
                <div className="banner"><img src={require("./imgages/regauthbanner.png")} alt="banner"/></div>
                <div className="form-container">
                    <div className={auth ? "auth-form" : "auth-form-hidden"}>
                        <h1>Вход в аккаунт</h1>
                        <h3>Введите, пожалуйста, ваш адрес электронной</h3>
                        <h3>почты и пароль</h3>
                        <input type="text" placeholder={"Почта"}/>
                        <input type="text" placeholder={"Пароль"}/>
                        <div className="for-con">
                            <button className={"forgot"} onClick={event => forgotpass()}>Забыли пароль?</button>
                        </div>
                        <div className="butt-container">
                            <button onClick={event => Entry()}>Войти</button>
                        </div>
                        <div className={'reg'}><p>Нет аккаунта?</p>
                            <button onClick={event => changeForm(false)}>Зарегистрируйтесь</button>
                        </div>
                    </div>
                    <div className={!auth ? "reg-form" : "reg-form-hidden"}>
                        <h1>Зарегистрироваться</h1>
                        <h3>Введите свои данные для создания учетной записи</h3>
                        <input type="text" placeholder={"Имя"}/>
                        <input type="text" placeholder={"Фамилия"}/>
                        <input type="text" placeholder={"Почта"}/>
                        <input type="text" placeholder={"Пароль"}/>
                        <div className="for-con">
                            <button className={"forgot"} onClick={event => forgotpass()}>Забыли пароль?</button>
                        </div>
                        <div className="butt-container">
                            <button onClick={event => Entry()}>Зарегистрироваться</button>
                        </div>
                        <div className="data">
                            <input type="checkbox"/>
                            <p>Я даю согласие на обработку моих</p>
                            <button>Персональных данных</button>
                        </div>
                        <div className={'reg'}><p>У вас уже есть аккаунт?</p>
                            <button onClick={event => changeForm(true)}>Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RegAuthPage;