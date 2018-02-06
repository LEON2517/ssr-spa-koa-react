import React, { Component } from 'react'
import './style.css'

import {connect} from 'react-redux'
import {signIn} from '../../../../actions'


class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    };


    render() {
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

                <div className="form-group">
                    <small id="passwordHelpBlock" className="form-text text-muted">
                        Пароль.
                    </small>
                    <input type = "password"
                           value = {this.state.password}
                           onChange = {this.handleChange('password')}
                           className = "form-control"
                           aria-describedby="passwordHelp"
                           placeholder="Пароль"/>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input"
                               type="checkbox"
                               id="inlineCheckbox1"
                               value="option1"/> Запомнить мой адресс электронной почты.
                    </label>
                </div>

                <button type="submit" className="btn btn-secondary login-form__button" onClick = {this.handleSubmit}>Вход</button>
                <button type="submit" className="btn btn-secondary login-form__button" onClick = {this.handleSubmit}>Забыли пароль?</button>

                <div>
                    <h4>У Вас еще нет аккаунта? Создать аккаунт</h4>
                </div>
                <div>
                    <h4>Забыли пароль? Восстановить пароль</h4>
                </div>
                <div>
                    <h4>Не получили инструкции для подтверждения учетной записи? Отправить еще раз</h4>
                </div>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.signIn({
            email: this.state.email,
            password: this.state.password
        });
        this.setState({
            email: '',
            password: ''
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
    },
    password: {
        min: 1,
        max: 20
    }
};


export default connect(null,{signIn})(LoginForm)