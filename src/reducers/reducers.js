import { combineReducers } from 'redux';
import { SHOW_LOGIN_POPUP, HIDE_LOGIN_POPUP, REQUEST_LOGIN, RECEIVE_LOGIN } from '../actions/actions';

const initialState = {
    loginPopupVisible: false
};

function loginPopup(state = initialState, action) {
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

/*const reducerApp = combineReducers({
    loginPopup
});*/

export default loginPopup;