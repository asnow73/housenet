import React from 'react'
import ReactDOM from 'react-dom'
//import { connect } from 'react-redux'
import Date from '../date/date';

class Poster extends React.Component {
    render() {
        return (
            <div>
                <div className="author">Author: {this.props.data.author}</div>
                <Date date={this.props.data.date}></Date>
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