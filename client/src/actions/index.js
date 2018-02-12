import {LOAD_HOME_PAGE_ARTICLES,SIGN_IN_FORM, SIGN_UP_FORM, FORGOT_PASSWORD_FORM, RECOVERY_PASSWORD_FORM, START, SUCCESS, FAIL } from '../constants'
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
            type: SIGN_UP_FORM + START
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
                    type: SIGN_UP_FORM + SUCCESS,
                    response
                }))
                .catch(error => {
                    dispatch({
                        type: SIGN_UP_FORM + FAIL,
                        error
                    })
                })
        }, 500)
    }
}


export function signIn(formData) {
    return (dispatch) => {

        dispatch({
            type: SIGN_IN_FORM + START,
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
                        type: SIGN_IN_FORM + SUCCESS,
                        response
                    });

                    dispatch(push('/account'))

                })
                .catch(error => {
                    dispatch({
                        type: SIGN_IN_FORM + FAIL,
                        error
                    })
                })
        }, 500)
    }
}


export function forgotPassword(formData) {
    return (dispatch) => {

        dispatch({
            type: FORGOT_PASSWORD_FORM + START
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
                    type: FORGOT_PASSWORD_FORM + SUCCESS,
                    response
                }))
                .catch(error => {
                    dispatch({
                        type: FORGOT_PASSWORD_FORM + FAIL,
                        error
                    })
                })
        }, 500)
    }
}


export function recoveryPassword(formData) {
    return (dispatch) => {

        dispatch({
            type: RECOVERY_PASSWORD_FORM + START
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
                    type: RECOVERY_PASSWORD_FORM + SUCCESS,
                    response
                }))
                .catch(error => {
                    dispatch({
                        type: RECOVERY_PASSWORD_FORM + FAIL,
                        error
                    })
                })
        }, 500)
    }
}




