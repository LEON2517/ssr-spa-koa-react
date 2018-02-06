import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class RegistrationStripe extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="container-fluid registration-stripe__carousel">

                <div className="row">
                    <div className="col text-center">
                        <h1 className="registration-stripe__h1">Регистрация</h1>
                        <h2 className="registration-stripe__h2">Создайте аккаунт, это займет меньше минуты.</h2>
                    </div>
                </div>

            </div>

        )
    }
}


export default RegistrationStripe