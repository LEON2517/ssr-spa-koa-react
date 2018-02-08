import React, { Component } from 'react'
import './style.css'

import {connect} from 'react-redux'
import {signUp} from '../../../../actions'

class RegistrationForm extends Component {

    state = {
        firstName: 'Dima',
        lastName: 'Leontev',
        email: 'dima.durdyev.92@list.ru',
        password: '123456',
        passwordConfirm: ''
    };


    render() {
        return (
                <form className="container registration-form__container_margin" id="needs-validation" noValidate>

                    <label htmlFor="InputData">Персональные данные</label>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input type="text"
                                       value = {this.state.firstName}
                                       onChange = {this.handleChange('firstName')}
                                       className = "form-control"
                                       placeholder="Имя"/>
                                <small className="form-text text-muted">
                                    Необходимо ввести имя.
                                </small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="text"
                                       value = {this.state.lastName}
                                       onChange = {this.handleChange('lastName')}
                                       className = "form-control"
                                       placeholder="Фамилия"/>
                                <small className="form-text text-muted">
                                    Необходимо ввести фамилию.
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputEmail">Адрес электронной почты</label>
                        <hr/>
                        <small id="emailHelpBlock" className="form-text text-muted">
                            Используемый для входа в свой аккаунт.
                        </small>
                        <input type = "email"
                               value = {this.state.email}
                               onChange = {this.handleChange('email')}
                               className = "form-control"
                               aria-describedby="emailHelp"
                               placeholder="email@example.org"/>
                        <small id="emailHelpBlock" className="form-text text-muted">
                            Пожалуйста, введите действующий адрес электронной почты.
                        </small>
                    </div>

                    <label htmlFor="InputPassword">Пароль</label>
                    <hr/>
                    <small id="passwordHelpBlock" className="form-text text-muted">
                        Пароль, должен содержать минимум 8 символов включая хотя бы 1 цифру и 1 заглавную букву.
                    </small>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input type="password"
                                       value = {this.state.password}
                                       onChange = {this.handleChange('password')}
                                       className = "form-control"
                                       placeholder="Создать пароль"/>
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    Пароль, должен содержать минимум 8 символов включая хотя бы 1 цифру и 1 заглавную букву.
                                </small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="password"
                                       value = {this.state.passwordConfirm}
                                       onChange = {this.handleChange('passwordConfirm')}
                                       className = "form-control"
                                       placeholder="Подтвердить пароль"/>
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    Введенные пароли не совпадают.
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="inlineCheckbox1"
                                   value="option1"/> Я прочитал(-а) и соглашаюсь с Пользовательское соглашение.
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input"
                                   type="checkbox" id="inlineCheckbox2"
                                   value="option2"/> Я даю свое согласие на сбор, обработку и хранение моих персональных данных
                        </label>
                    </div>

                    <button type="button" className="btn btn-secondary" onClick = {this.handleSubmit}>Создать аккаунт</button>

                    <div>
                        <h4>Уже есть аккаунт? Вход</h4>
                    </div>
                </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.signUp({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        });
        this.setState({
            email: '',
            password: '',
            passwordConfirm: '',
            firstName: '',
            lastName: '',
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
    firstName: {
        min: 1,
        max: 20
    },
    lastName: {
        min: 1,
        max: 100
    },
    email: {
        min: 1,
        max: 100
    },
    password: {
        min: 1,
        max: 100
    },
    passwordConfirm: {
        min: 1,
        max: 100
    }
};


export default connect(null,{signUp})(RegistrationForm)