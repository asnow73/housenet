import React from 'react';
import Poster from '../poster/poster';

class Posts extends React.Component {
    render () {
        var posts = [
            {
                id: 1,
                author: "Albert Galiullov",
                date: "22.05.2016",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nunc sed lorem hendrerit venenatis. Nulla facilisi. Aenean quis lobortis erat. Aenean interdum tempus viverra. Nunc euismod eros mauris, eu convallis justo auctor sit amet. Fusce pulvinar luctus magna, eu egestas nisi fermentum quis. Duis pellentesque porttitor velit ut porta. Nulla mauris tortor, vestibulum tempus varius sit amet, gravida feugiat eros. Suspendisse et turpis mauris. Mauris gravida augue sit amet mauris tristique, condimentum imperdiet magna sagittis. Nulla facilisi. Duis vitae sem non arcu auctor viverra at eget felis. Duis pellentesque justo nec tortor dictum sollicitudin."
            },
            {
                id: 2,
                author: "Valeria Frolova",
                date: "21.05.2016",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nunc sed lorem hendrerit venenatis. Nulla facilisi. Aenean quis lobortis erat. Aenean interdum tempus viverra. Nunc euismod eros mauris, eu convallis justo auctor sit amet. Fusce pulvinar luctus magna, eu egestas nisi fermentum quis. Duis pellentesque porttitor velit ut porta. Nulla mauris tortor, vestibulum tempus varius sit amet, gravida feugiat eros. Suspendisse et turpis mauris. Mauris gravida augue sit amet mauris tristique, condimentum imperdiet magna sagittis. Nulla facilisi. Duis vitae sem non arcu auctor viverra at eget felis. Duis pellentesque justo nec tortor dictum sollicitudin."
            }
        ];

        let tags = posts.map( post => {
            return <Poster key={post.id} data={post}/>
        });

        return (
            <div>
                {tags}
            </div>
        )
    }
}

export default Posts;