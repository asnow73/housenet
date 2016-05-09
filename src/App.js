import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { showLoginPopup } from './actions/actions';
import Popup from './popup/popup';

class App extends React.Component {
    render() {
        // Получено благодаря вызову connect():
        const { dispatch } = this.props;
        return (
            <div>
                <a href="#" onClick={() => dispatch(showLoginPopup())}>Open popup</a>
                <Popup></Popup>
            </div>
        );
    }
}

// Какие именно props мы хотим получить из приходящего, как аргумент,глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для более лучшей производительности.
function select(state) {
    return {
        //loginPopupVisible: state.loginPopupVisible
    };
}

//export default App;
// Оборачиваем компонент `App` для внедрения  в него функции `dispatch` и состояния
export default connect(select)(App);