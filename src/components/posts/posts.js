import React from 'react';
import { connect } from 'react-redux';
import Poster from '../poster/poster';
require("./posts.scss");

class Posts extends React.Component {
    render () {
        var posts = this.props.state.newPosterPopup.posts;

        let tags = posts.map( post => {
            return <Poster key={post.id} data={post}/>
        });

        return (
            <div className="posts-list">
                {tags}
            </div>
        )
    }
}

function select(state) {
    return {
        state
        //loginPopupVisible: state.loginPopupVisible
    };
}

//export default Posts;
export default connect(select)(Posts);