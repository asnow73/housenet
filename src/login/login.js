import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Title from '../title/title'
import { hideLoginPopup, getConfirmLogin } from '../actions/actions';
require("./login.scss");
require("../styles/button.scss");


class Login extends React.Component {
    login() {
        const { dispatch } = this.props;
        var email = ReactDOM.findDOMNode(this.refs.email).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;
        dispatch(getConfirmLogin(email, password)).then(function(){
            dispatch(hideLoginPopup());
        });
    }
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <div className="login">
                    <Title>Войти в систему</Title>
                    <label htmlFor="">
                        <span>Введите email:</span>
                        <input ref="email" name="email" type="text"/>
                    </label>
                    <label htmlFor="">
                        <span>Введите пароль:</span>
                        <input ref="password" name="password" type="password"/>
                    </label>
                </div>
                <div className="buttons-bar">
                    <button onClick={() => dispatch(hideLoginPopup())}>Close</button>
                    <button onClick={this.login.bind(this)} disabled={this.props.state.isFetching}>Login</button>
                </div>
            </div>
        )
    }
}

function select(state) {
    return {
        state
        //loginPopupVisible: state.loginPopupVisible
    };
}

export default connect(select)(Login);