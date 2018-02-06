import React, { Component } from 'react'
import Header from '../Header'
import RegistrationForm from './components/RegistrationForm'
import RegistrationStripe from './components/RegistrationStripe'
import Footer from '../Footer'

class RegistrationPage extends Component {

    render() {
        return(
            <div>
                <Header/>
                <RegistrationStripe/>
                <RegistrationForm/>
                <Footer/>
            </div>
        )
    }
}

export default RegistrationPage