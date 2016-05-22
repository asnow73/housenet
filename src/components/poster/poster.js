import React from 'react'
//import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Poster extends React.Component {
    render() {
        return (
            <div>Poster</div>
        )
    }
}

function select(state) {
    return {state};
}

export default connect(select)(Poster);