export const SHOW_LOGIN_POPUP = 'SHOW_LOGIN_POPUP';
export const HIDE_LOGIN_POPUP = 'HIDE_LOGIN_POPUP';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

export function showLoginPopup() {
    return {
        type: SHOW_LOGIN_POPUP
    }
}

export function hideLoginPopup() {
    return {
        type: HIDE_LOGIN_POPUP
    }
}

export function getConfirmLogin(email, password) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_LOGIN,
            email: email,
            password: password
        })
        setTimeout(() => {
            dispatch({
                type: RECEIVE_LOGIN,
                confirm: true
            })
        }, 3000)
    }
}