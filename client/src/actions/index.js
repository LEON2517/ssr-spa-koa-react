import { GET_ICON, LOAD_HOME_PAGE_ARTICLES, SEND_FORM, START, SUCCESS, FAIL } from '../constants'


export function loadHomePageArticles() {
    return {
        type: LOAD_HOME_PAGE_ARTICLES,
        callAPI: `http://localhost:3001/api/home`
    };
}

export function signUp(formData) {
    return (dispatch, getState) => {

        dispatch({
            type: SEND_FORM + START,
        })

        setTimeout(() => {
            fetch(`http://localhost:3001/sign_up`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => {
                    if (res.status >= 400) throw new Error(res.statusText)
                    return res.json()
                })
/*                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id },
                    response
                }))*/
                .catch(error => {
                    dispatch(push('/error'))

                    dispatch({
                        type: SEND_FORM + FAIL,
                        error
                    })
                })
        }, 500)
    }
}


export function signIn(formData) {
    return (dispatch, getState) => {

        dispatch({
            type: SEND_FORM + START,
        });

        setTimeout(() => {
            fetch("http://localhost:3001/sign_in", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(response => {
                    if (response.error)
                        throw response.error;

                    return response.token;
                })
                .then(token => {
                    alert("Auth success, fetching private information...");

                    return fetch("http://localhost:3001/private", {
                        headers: { "Authorization": token }
                    });
                })
                .then(res => res.json())
                .then(response => {
                    alert(JSON.stringify(response));
                })
                .catch(function(err) {
                    alert("Error: " + err.message);
                });
        }, 500)
    }
}


