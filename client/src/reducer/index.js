import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import articles from './articles'

export default combineReducers({
    articles,
    router
})