import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { showLoginPopup, logout } from '../../actions/actionsLoginPopup';
import { showNewPosterPopup } from '../../actions/actionsNewPosterPopup';
import Popup from '../popup/popup';
require("./menu.scss");

class Menu extends React.Component {
    render() {
        // Получено благодаря вызову connect():
        const { dispatch } = this.props;

        return (
            <div>
                <div className="navbar">
                    <a className={classnames((!this.props.state.loginPopup.isAuth) ? 'visible' : 'hide')} href="#" onClick={() => dispatch(showLoginPopup())}>Sign In</a>
                    <a className={classnames((this.props.state.loginPopup.isAuth) ? 'visible' : 'hide')} href="#" onClick={() => dispatch(logout())}>Sign Out</a>
                    <a className={classnames((this.props.state.loginPopup.isAuth) ? 'visible' : 'hide')} href="#" onClick={() => dispatch(showNewPosterPopup())}>New Poster</a>
                </div>
                <Popup></Popup>
            </div>
        );
    }
}
// Какие именно props мы хотим получить из приходящего, как аргумент,глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для более лучшей производительности.
function select(state) {
    return {
        state
        //loginPopupVisible: state.loginPopupVisible
    };
}

//export default App;
// Оборачиваем компонент `App` для внедрения  в него функции `dispatch` и состояния
export default connect(select)(Menu);