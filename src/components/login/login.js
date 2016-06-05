import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hideLoginPopup, getConfirmLogin } from '../../actions/actionsLoginPopup';
//import classnames from 'classnames';
import Title from '../title/title'
import Preloader from '../preloader/preloader'
require("./login.scss");
require("../../styles/button.scss");
require("../../styles/common.scss");


class Login extends React.Component {
    login() {
        const { dispatch } = this.props;
        var email = ReactDOM.findDOMNode(this.refs.email).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;
        var context = this.context;
        dispatch(getConfirmLogin(email, password)).then(function(){
            dispatch(hideLoginPopup());
            context.router.push('/posts');
        });
    }
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <div className="login">
                    <Title>Sign In</Title>
                    <label htmlFor="">
                        <input ref="email" name="email" type="email" placeholder="Email"/>
                    </label>
                    <label htmlFor="">
                        <input ref="password" name="password" type="password" placeholder="Password"/>
                    </label>
                </div>
                <div className="buttons-bar">
                    <button onClick={() => dispatch(hideLoginPopup())}>Close</button>
                    <button onClick={this.login.bind(this)} disabled={this.props.state.isFetching}>Login</button>
                </div>
                <Preloader visible={this.props.state.loginPopup.isFetching}></Preloader>
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};

function select(state) {
    return {
        state
        //loginPopupVisible: state.loginPopupVisible
    };
}

export default connect(select)(Login);