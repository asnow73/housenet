import React from 'react';

class Date extends React.Component {
    render() {
        return (
            <div className="date">Date: {this.props.date}</div>
        )
    }
}

Date.propTypes = {
    date : React.PropTypes.string
}

export default Date;