import React from 'react';
import Title from '../title/title'
require("./login.scss");

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <Title>Войти в систему</Title>
                <label htmlFor="">
                    <span>Введите email:</span>
                    <input name="email" type="text"/>
                </label>
                <label htmlFor="">
                    <span>Введите пароль:</span>
                    <input name="password" type="password"/>
                </label>
            </div>
        )
    }
}

export default Login;