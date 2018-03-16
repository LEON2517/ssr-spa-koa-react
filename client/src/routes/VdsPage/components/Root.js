import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VdsBasic from './VdsBasic'
import VdsPresentation from './VdsPresentation'
import Header from '../../Header'
import Footer from '../../Footer'

class Root extends Component {

    render() {
        return (
            <div>
                <Header/>
                <VdsPresentation/>
                <VdsBasic/>
                <Footer/>
            </div>
        )
    }
}


export default Root