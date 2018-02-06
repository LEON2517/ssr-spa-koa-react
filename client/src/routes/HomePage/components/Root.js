import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../../Header'
import SliderPresentation from './SliderPresentation'
import Advantages from './Advantages'
import Partners from './Partners'
import AboutUs from './AboutUs'
import CallForRegistration from './CallForRegistration'
import Footer from '../../Footer'
import Loader from '../../Loader'

import {connect} from 'react-redux'
import {loadHomePageArticles} from '../../../actions'

class Root extends Component {

    componentDidMount() {
        const {isLoading, isLoaded, loadHomePageArticles} = this.props;
        if(!isLoading && !isLoaded) loadHomePageArticles()
    }


    render() {
        const {isLoading, isLoaded, articles} = this.props;
        if(!isLoaded) return <Loader/>;

        return (
            <div>
                <Header/>
                <SliderPresentation articles = {articles}/>
                <Advantages articles = {articles}/>
                <Partners articles = {articles}/>
                <AboutUs articles = {articles}/>
                <CallForRegistration articles = {articles}/>
                <Footer/>
            </div>
        )
    }
}


export default connect(state => {
    console.log('---', 'connect')
    return {
        articles: state.articles,
        isLoading: state.articles.isLoading,
        isLoaded: state.articles.isLoaded
    }
},{loadHomePageArticles})(Root)