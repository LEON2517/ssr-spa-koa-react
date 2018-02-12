import React, { Component } from 'react'
import './style.css'

import {connect} from 'react-redux'
import {recoveryPassword} from '../../actions'


class RecoverPasswordPage extends Component {

    state = {
        password: ''
    };


    render() {
        const {form, status} = this.props;
        const message = status ? (
            <h2>{form.response.success || form.response.error}</h2>
        ) : null;

        return (
            <form className="container login-form__container_margin" id="needs-validation" noValidate>
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

                <div>{message}</div>

                <button type="button" className="btn btn-secondary login-form__button" onClick = {this.handleSubmit}>Сохранить пароль</button>
            </form>
        )
    }

    handleSubmit = ev => {
        const passwordResetToken = this.props.match.params.passwordResetToken;
        ev.preventDefault();
        this.props.recoveryPassword({
            password: this.state.password,
            passwordResetToken: passwordResetToken
        });
        this.setState({
            password: '',
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
    password: {
        min: 1,
        max: 100
    }
};


export default connect(state => {
    return {
        form: state.form,
        status: state.form.status
    }
},{recoveryPassword})(RecoverPasswordPage)