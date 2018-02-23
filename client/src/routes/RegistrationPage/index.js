import React, { Component } from 'react'
import Header from '../Header'
import RegistrationForm from './components/RegistrationForm'
import RegistrationStripe from './components/RegistrationStripe'
import Footer from '../Footer'
import {user_agreement} from './fixtures'

class RegistrationPage extends Component {

    render() {
        return(
            <div>
                <Header/>
                <RegistrationStripe/>
                <RegistrationForm user_agreement={user_agreement}/>
                <Footer/>
            </div>
        )
    }
}

export default RegistrationPage