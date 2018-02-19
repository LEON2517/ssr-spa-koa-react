import React, { Component } from 'react'
import './style.css'

import {connect} from 'react-redux'
import {forgotPassword} from '../../actions'


class ForgotPasswordPage extends Component {

    state = {
        email: 'dima.durdyev.92@list.ru',
    };


    render() {
        const {user, status} = this.props;
        const message = status ? (
            <h2>{user.response.message}</h2>
        ) : null;

        return (
            <form className="container login-form__container_margin" id="needs-validation" noValidate>
                <div className="form-group">
                    <small id="emailHelpBlock" className="form-text text-muted">
                        Адресс электронной почты.
                    </small>
                    <input type = "email"
                           value = {this.state.email}
                           onChange = {this.handleChange('email')}
                           className = "form-control"
                           aria-describedby="emailHelp"
                           placeholder="Адресс электронной почты"/>
                </div>

                <div>{message}</div>

                <button type="button" className="btn btn-secondary login-form__button" onClick = {this.handleSubmit}>Восстановить пароль</button>

                <div>
                    <h4>У Вас еще нет аккаунта? Создать аккаунт</h4>
                </div>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.forgotPassword({
            email: this.state.email,
        });
        this.setState({
            email: '',
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    email: {
        min: 1,
        max: 100
    }
};


export default connect(state => {
    return {
        user: state.user,
        status: state.user.status
    }
},{forgotPassword})(ForgotPasswordPage)