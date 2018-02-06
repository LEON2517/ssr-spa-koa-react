import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action

    /*
    const action = {
        callAPI: `/api/home`
        type: 'LOAD_HOME_PAGE_ARTICLES'
    }
    */

    if (!callAPI) return next(action)

    next({
        ...rest,
        type: type + START
    })


    //dev only!!!!
    setTimeout(() => fetch(callAPI)
            .then(res => {
                return res.json()
            })
            .then(
                response => {
                    return next({...rest, type: type + SUCCESS, response})
                }
            )
            .catch(error => next({...rest, type: type + FAIL, error}))
        , 1000)
}