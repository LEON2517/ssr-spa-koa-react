import {LOAD_HOME_PAGE_ARTICLES,SIGN_IN_USER, SIGN_UP_USER, FORGOT_PASSWORD_USER, RECOVERY_PASSWORD_USER, START, SUCCESS, FAIL } from '../constants'
import {push} from 'react-router-redux'


export function loadHomePageArticles() {
    return {
        type: LOAD_HOME_PAGE_ARTICLES,
        callAPI: `http://localhost:3001/api/home`
    };
}

export function signUp(formData) {
    return (dispatch) => {

        dispatch({
            type: SIGN_UP_USER + START
        });

        setTimeout(() => {
            fetch(`http://localhost:3001/sign_up`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
                .then(res => {
                    if (res.status >= 400) throw new Error(res.statusText);
                    return res.json()
                })
                .then(response => dispatch({
                    type: SIGN_UP_USER + SUCCESS,
                    response
                }))
                .catch(error => {
                    dispatch({
                        type: SIGN_UP_USER + FAIL,
                        error
                    })
                })
        }, 500)
    }
}


export function signIn(formData) {
    return (dispatch) => {

        dispatch({
            type: SIGN_IN_USER + START,
        });

        setTimeout(() => {
            fetch("http://localhost:3001/sign_in", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(response => {
                    if (response.error)
                        throw response.error;

                    return response.token;
                })
                .then(token => {
                    return fetch("http://localhost:3001/private", {
                        method: "GET",
                        headers: { "Authorization": token }
                    });
                })
                .then(res => res.json())
                .then(response => {
                    dispatch({
                        type: SIGN_IN_USER + SUCCESS,
                        response
                    });

                    dispatch(push('/account'))

                })
                .catch(response => {
                    dispatch({
                        type: SIGN_IN_USER + FAIL,
                        response
                    })
                })
        }, 500)
    }
}


export function forgotPassword(formData) {
    return (dispatch) => {

        dispatch({
            type: FORGOT_PASSWORD_USER + START
        });

        setTimeout(() => {
            fetch(`http://localhost:3001/forgot_recover`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => {
                    if (res.status >= 400) throw new Error(res.statusText);
                    return res.json()
                })
                .then(response => dispatch({
                    type: FORGOT_PASSWORD_USER + SUCCESS,
                    response
                }))
                .catch(error => {
                    dispatch({
                        type: FORGOT_PASSWORD_USER + FAIL,
                        error
                    })
                })
        }, 500)
    }
}


export function recoveryPassword(formData) {
    return (dispatch) => {

        dispatch({
            type: RECOVERY_PASSWORD_USER + START
        });

        setTimeout(() => {
            fetch(`http://localhost:3001/recover_password`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
                .then(res => {
                    if (res.status >= 400) throw new Error(res.statusText);
                    return res.json()
                })
                .then(response => dispatch({
                    type: RECOVERY_PASSWORD_USER + SUCCESS,
                    response
                }))
                .catch(error => {
                    dispatch({
                        type: RECOVERY_PASSWORD_USER + FAIL,
                        error
                    })
                })
        }, 500)
    }
}




