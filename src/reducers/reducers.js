import { combineReducers } from 'redux';
import { SHOW_LOGIN_POPUP, HIDE_LOGIN_POPUP } from '../actions/actions';

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
        default:
            return state;
    }
}

/*const reducerApp = combineReducers({
    loginPopup
});*/

export default loginPopup;