import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../../Header'
import PanelInformation from './PanelInformation'
import Footer from '../../Footer'
import Loader from '../../Loader'

import {connect} from 'react-redux'

class Root extends Component {

    render() {
        const {form} = this.props;


        return (
            <div>
                <Header/>
                <PanelInformation form = {form}/>
                <Footer/>
            </div>
        )
    }
}


export default connect(state => {
    return {
        form: state.form

    }
})(Root)