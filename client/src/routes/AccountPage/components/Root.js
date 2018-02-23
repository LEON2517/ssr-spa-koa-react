import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../../Header'

import Account from './Account'
import VDS from './VDS'
import {Route, Link, Switch, Redirect, withRouter} from 'react-router-dom'

import NavBar from './NavBar'


import {connect} from 'react-redux'

class Root extends Component {

    render() {
        const {user, history} = this.props;

        return (
            <div>
                <Header history = {history}/>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-2">
                            <div>
                                <NavBar user={user} history = {history}/>
                            </div>
                        </div>
                        <div className="col-10">
                            <Switch>
                                <Route path="/account/id" render={() => <Account user={user}  />}/>
                                <Route path="/account/vds" render={() => <VDS user={user} />}/>
                            </Switch>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}


export default withRouter(connect(state => {
    return {
        user: state.user
    }
})(Root))
