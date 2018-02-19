import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {routerReducer as router} from 'react-router-redux'
import articles from './articles'
import user from './user'

export default combineReducers({
    form: formReducer,
    user,
    articles,
    router
})