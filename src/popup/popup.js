import React from 'react';
import { connect } from 'react-redux';
import Login from '../login/login';
import classnames from 'classnames';
require("./popup.scss");

class Popup extends React.Component {
    render() {
        // Получено благодаря вызову connect():
        const { loginPopupVisible } = this.props;
        var visible = loginPopupVisible ? 'popup-visible' : 'popup-hide';
        return (
            <div className={classnames('popup', visible)}>
                <div className="popup-content">
                    <Login></Login>
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