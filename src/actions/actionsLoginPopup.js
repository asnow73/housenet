export const SHOW_LOGIN_POPUP = 'SHOW_LOGIN_POPUP';
export const HIDE_LOGIN_POPUP = 'HIDE_LOGIN_POPUP';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = "LOGOUT";

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
        return new Promise(function (resolve, reject) {
            dispatch({
                type: REQUEST_LOGIN,
                email: email,
                password: password
            });

            fetch('http://localhost:8088/authenticate', {
                method: 'post',
                body: 'name=Alena&password=123456'
            }).then((response) => {
                console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
                console.log(response.status); // 200
                dispatch({
                    type: RECEIVE_LOGIN,
                    confirm: true
                });
                resolve();
            }, () => {
                reject();
            });
        });

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

export function logout() {
    return {
        type: LOGOUT
    }
}