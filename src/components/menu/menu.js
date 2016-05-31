import React from 'react';
import { connect } from 'react-redux';
import { showLoginPopup } from '../../actions/actions';
import Popup from '../popup/popup';
require("./menu.scss");

class Menu extends React.Component {
    render() {
        // Получено благодаря вызову connect():
        const { dispatch } = this.props;
        return (
            <div>
                <div className="navbar">
                    <a href="#" onClick={() => dispatch(showLoginPopup())}>Sign In</a>
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