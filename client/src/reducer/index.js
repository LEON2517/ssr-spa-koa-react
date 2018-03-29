import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import articles from './articles'
import user from './user'
import form from './form'

export default combineReducers({
    form,
    user,
    articles,
    router
})