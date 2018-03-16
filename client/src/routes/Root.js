import React, {Component} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import HomePage from './HomePage'
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import ForgotPasswordPage from './ForgotPasswordPage'
import RecoverPasswordPage from './RecoverPasswordPage'
import AccountPage from './AccountPage'
import VdsPage from './VdsPage'


export default class Root extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Redirect from="/" exact to="vds" />
                    <Route exact path="/home" component={HomePage}/>
                    <Route path="/vds" component={VdsPage}/>
                    <Route path="/account" component={AccountPage}/>
                    <Route path="/forgot-recover/forgot-password" component={ForgotPasswordPage}/>
                    <Route path="/forgot-recover/recover-password/:passwordResetToken" component={RecoverPasswordPage}/>
                    <Route path="/sign_up" component={RegistrationPage}/>
                    <Route path="/sign_in" component={LoginPage}/>
                    <Route path="/error" render={() => <h1 style={styles}>Error</h1>}/>
                    <Route path="*" render={() => <h1 style={styles}>Not Found</h1>}/>
                </Switch>
            </div>
        )
    }
}

let styles = {
    width: '230px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
};