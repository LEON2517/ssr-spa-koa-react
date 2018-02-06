import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import articles from './articles'
import user from './user'

export default combineReducers({
    user,
    articles,
    router
})