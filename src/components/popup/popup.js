import React from 'react';
import { connect } from 'react-redux';
import Login from '../login/login';
import NewPoster from '../poster/newPoster';
import classnames from 'classnames';
require("./popup.scss");
require("../../styles/common.scss");

class Popup extends React.Component {
    constructor() {
        super();
        this.getPopup = this.getPopup.bind(this);
    }

    getPopup() {
        const { loginPopupVisible, newPosterPopupVisible } = this.props;
        if (loginPopupVisible) {
            return <Login />;
        } else if (newPosterPopupVisible) {
            return <NewPoster />;
        } else {
            return null;
        }


    }

    render() {
        var content = this.getPopup();
        var visible = (content != null) ? 'visible' : 'hide';
        return (
            <div className={classnames('popup', visible)}>
                <div className="popup-content">
                    {content}
                </div>
            </div>
        )
    }
}

// Какие именно props мы хотим получить из приходящего, как аргумент,глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для более лучшей производительности.
function select(state) {
    return {
        loginPopupVisible: state.loginPopup.loginPopupVisible,
        newPosterPopupVisible: state.newPosterPopup.newPosterPopupVisible
    };
}

// Оборачиваем компонент `App` для внедрения  в него функции `dispatch` и состояния
export default connect(select)(Popup);