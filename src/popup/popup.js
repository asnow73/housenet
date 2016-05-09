import React from 'react';
import { connect } from 'react-redux';
import { hideLoginPopup, showLoginPopup } from '../actions/actions';
import Login from '../login/login';
import classnames from 'classnames';
require("./popup.scss");
require("../styles/button.scss");

class Popup extends React.Component {
    render() {
        // Получено благодаря вызову connect():
        const { dispatch, loginPopupVisible } = this.props;
        var visible = loginPopupVisible ? 'popup-visible' : 'popup-hide';
        return (
            <div className={classnames('popup', visible)} onClick={() => dispatch(hideLoginPopup())}>
                <div className="popup-content">
                    <Login></Login>

                    <div className="buttons-bar">
                        <button onClick={() => dispatch(hideLoginPopup())}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

// Какие именно props мы хотим получить из приходящего, как аргумент,глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для более лучшей производительности.
function select(state) {
    return {
        loginPopupVisible: state.loginPopupVisible
    };
}

// Оборачиваем компонент `App` для внедрения  в него функции `dispatch` и состояния
export default connect(select)(Popup);