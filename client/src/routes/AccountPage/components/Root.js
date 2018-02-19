import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../../Header'
import PanelInformation from './PanelInformation'
import Loader from '../../Loader'

import {connect} from 'react-redux'

class Root extends Component {

    render() {
        const {user} = this.props;


        return (
            <div>
                <Header/>
                <PanelInformation user = {user}/>
            </div>
        )
    }
}


export default connect(state => {
    return {
        user: state.user

    }
})(Root)