import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VdsHelp from './VdsHelp'
import VdsAntifrodScheme from './VdsAntifrodScheme'
import VdsAntidetectScheme from './VdsAntidetectScheme'
import VdsTariffs from './VdsTariffs'
import VdsAntidetect from './VdsAntidetect'
import VdsAntifrod from './VdsAntifrod'
import VdsBk from './VdsBk'
import VdsTechnical from './VdsTechnical'
import VdsReviews from './VdsReviews'
import VdsInfo from './VdsInfo'
import VdsPresentation from './VdsPresentation'
import ReviewsList from './ReviewsList'
import Header from '../../Header'
import Footer from '../../Footer'

class Root extends Component {

    render() {
        return (
            <div>
                <Header/>
                <VdsPresentation/>
                <VdsInfo/>
                <VdsTechnical/>
                <VdsBk/>
{/*
                <VdsAntifrodScheme/>
*/}
                <VdsAntifrod/>
{/*
                <VdsAntidetectScheme/>
*/}
                <VdsAntidetect/>
                <VdsReviews/>
                <VdsTariffs/>
                <VdsHelp/>
                <Footer/>
            </div>
        )
    }
}


export default Root