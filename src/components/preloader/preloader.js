import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
require("./preloader.scss");
require("../../styles/common.scss");

class Preloader extends React.Component {

    render() {
        var preloaderVisible = this.props.state.isFetching ? 'visible' : 'hide';
        return (
            <div className={classnames("preloader", preloaderVisible)}>
                <div className="preloader-image"></div>
            </div>
        )
    }
}

function select(state) {
    return {
        state
    };
}

export default connect(select)(Preloader);