import { combineReducers } from 'redux';
import { SHOW_LOGIN_POPUP, HIDE_LOGIN_POPUP, REQUEST_LOGIN, RECEIVE_LOGIN } from '../actions/actionsLoginPopup';
import { HIDE_NEW_POSTER_POPUP, SHOW_NEW_POSTER_POPUP, CREATE_POSTER } from '../actions/actionsNewPosterPopup';

/*const initialState = {
    loginPopupVisible: false,
    newPosterPopupVisible: false
};*/

function loginPopup(state = {loginPopupVisible: false}, action) {
    switch (action.type) {
        case SHOW_LOGIN_POPUP:
            return Object.assign({}, state, {
                loginPopupVisible: true
            });
        case HIDE_LOGIN_POPUP:
            return Object.assign({}, state, {
                loginPopupVisible: false
            });
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                isConfirmed: true
            });
        default:
            return state;
    }
}

var posterInitailState = {
    newPosterPopupVisible: false,
    posts: [
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
    ]
}

function newPosterPopup(state = posterInitailState, action) {
    switch (action.type) {
        case SHOW_NEW_POSTER_POPUP:
            return Object.assign({}, state, {
                newPosterPopupVisible: true
            });
        case HIDE_NEW_POSTER_POPUP:
            return Object.assign({}, state, {
                newPosterPopupVisible: false
            });
        case CREATE_POSTER:
            var newPosts = state.posts.slice();
            newPosts.push({
                id: 3,
                author: action.author,
                date: action.date,
                content: action.content
            });
            return Object.assign({}, state, {
                posts: newPosts
            });
        default:
            return state;
    }
}

const reducerApp = combineReducers({
    loginPopup,
    newPosterPopup
});


export default reducerApp;