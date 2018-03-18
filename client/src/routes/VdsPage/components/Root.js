import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VdsTechnical from './VdsTechnical'
import VdsInfo from './VdsInfo'
import VdsPresentation from './VdsPresentation'
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
                <Footer/>
            </div>
        )
    }
}


export default Root