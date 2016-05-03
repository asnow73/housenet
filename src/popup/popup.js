import React from 'react';
import Login from '../login/login';
import classnames from 'classnames';
require("./popup.scss");
require("../styles/button.scss");

class Popup extends React.Component {
    constructor() {
        super();
        this.state ={
            visible: "popup-visible"
        };
    }
    close() {
         this.setState({
             visible: "popup-hide"
         });
    }

    render() {
        return (
            <div className={classnames('popup', this.state.visible)} onClick={this.close.bind(this)}>
                <div className="popup-content">
                    <Login></Login>

                    <div className="buttons-bar">
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;