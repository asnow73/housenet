import React from 'react'
import ReactDOM from 'react-dom'
//import { connect } from 'react-redux'
import Date from '../date/date';
require("./poster.scss");

class Poster extends React.Component {
    render() {
        return (
            <div className="poster">
                <div className="info">
                    <div className="author">Published by <b>{this.props.data.author}</b></div>
                    <Date date={this.props.data.date}></Date>
                </div>
                <div className="content">Content: {this.props.data.content}</div>
            </div>
        )
    }
}

Poster.propTypes = {
    data: React.PropTypes.object
}

//function select(state) {
//    return {state};
//}
//
//export default connect(select)(Poster);
export default Poster;