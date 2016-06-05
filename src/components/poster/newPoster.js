import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hideNewPosterPopup, createPoster } from '../../actions/actionsNewPosterPopup';
import Title from '../title/title'
import Preloader from '../preloader/preloader'
//require("./login.scss");
require("../../styles/button.scss");
require("../../styles/common.scss");


class NewPoster extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    getDate() {
        var date = new Date();
        var day = date.getDate().toString();
        var month = date.getMonth().toString();
        return (day.length == 1 ? '0' + day : day) + '.' + (month.length == 1 ? '0' + month: month) + '.' + date.getFullYear();
    }

    create() {
        const { dispatch } = this.props;
        dispatch(createPoster(this.state.value, "Albert", this.getDate()));
        dispatch(hideNewPosterPopup());
    }

    handleChange(evt) {
        this.setState({
            value: evt.target.value
        });
    }

    //<textarea value={this.state.value} onchange={this.handleChange} cols="30" rows="10"></textarea>

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <div className="login">
                    <Title>New Poster</Title>
                    <textarea value={this.state.value} onChange={this.handleChange.bind(this)} cols="30" rows="10"></textarea>
                </div>
                <div className="buttons-bar">
                    <button onClick={() => dispatch(hideNewPosterPopup())}>Close</button>
                    <button onClick={this.create.bind(this)} disabled={!this.state.value.length}>Create Poster</button>
                </div>
            </div>
        )
    }
}

//Login.contextTypes = {
//    router: React.PropTypes.object
//};

function select(state) {
    return {
        state
        //loginPopupVisible: state.loginPopupVisible
    };
}

export default connect(select)(NewPoster);