import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import articles from './articles'
import form from './form'

export default combineReducers({
    form,
    articles,
    router
})