import React from 'react';
require("./title.scss");

class Title extends React.Component {
    render() {
        return (
            <div className="title">{this.props.children}</div>
        )
    }
}

export default Title;