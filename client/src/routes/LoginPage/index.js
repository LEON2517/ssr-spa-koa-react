import React, { Component } from 'react'
import Header from '../Header'
import LoginForm from './components/LoginForm'
import Footer from '../Footer'

class LoginPage extends Component {

    render() {
        return(
            <div>
                <Header/>
                <LoginForm/>
                <Footer/>
            </div>
        )
    }
}

export default LoginPage