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
    console.log("hide");
    return {
        type: HIDE_LOGIN_POPUP
    }
}

export function getConfirmLogin(email, password) {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            dispatch({
                type: REQUEST_LOGIN,
                email: email,
                password: password
            });
            setTimeout(function () {
                dispatch({
                    type: RECEIVE_LOGIN,
                    confirm: true
                });
                resolve();
            }, 2000)
        })

        /*dispatch({
            type: REQUEST_LOGIN,
            email: email,
            password: password
        })
        setTimeout(() => {
            dispatch({
                type: RECEIVE_LOGIN,
                confirm: true
            })
        }, 3000)*/
    }
}