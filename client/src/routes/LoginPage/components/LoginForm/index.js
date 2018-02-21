import React, { Component } from 'react';
import Header from '../../../Header'

import {Link } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {signIn} from '../../../../actions'

import './style.css'


class LoginForm extends Component {

    render() {
        const {user, status} = this.props;
        const message = status ? (
            <h2 className="server-response">{user.response.message}</h2>
        ) : null;

        const InnerForm = ({
                               values,
                               errors,
                               touched,
                               handleChange,
                               handleBlur,
                               handleSubmit,
                               isSubmitting,
                           }) => (
            <form onSubmit={handleSubmit}>
                <small className="form-text text-muted forgot-password-page__small_email"></small>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                    placeholder="Адрес электронной почты"/>
                {touched.email && errors.email && <div className="input-feedback">{errors.email}</div>}
                <small className="form-text text-muted forgot-password-page__small_pas"></small>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={errors.password && touched.password ? 'text-input error' : 'text-input'}
                    placeholder="Пароль"/>
                {touched.password && errors.password && <div className="input-feedback">{errors.password}</div>}
                <div>{message}</div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-md btn-primary forgot-password-page__btn forgot-password-page__btn_hover" type="submit" disabled={isSubmitting}>
                            Вход
                        </button>
                    </div>
                    <div className="col-offset forgot-password-page__col">
                        <Link to="/forgot-recover/forgot-password">
                            <button className="btn btn-md btn-outline-secondary forgot-password-page__btn-outline-secondary" type="submit" disabled={isSubmitting}>
                            Забыли пароль?
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        );

        const Form = withFormik({
            mapPropsToValues: props => ({ email: '', password: '' }),
            validate: (values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Укажите действительный адрес электронной почты.';
                } if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Укажите действительный адрес электронной почты.';
                } if (!values.password) {
                    errors.password = 'Пароль обязательное поле.';
                }
                return errors;
            },
            handleSubmit: (values) => {
                this.props.signIn(values);
            },
        })(InnerForm);


        return (
            <div>
                <Header />
                <div className="container forgot-password-page___container_size">
                    <div className="card">
                        <div className="card-body">
                            <div className="">
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className="row login-form__row">
                        <div className="col text-center">
                            <Link to="/sign_up">
                                <button className="btn btn-md btn-primary forgot-password-page__btn forgot-password-page__btn_hover">
                                Создать аккаунт
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => {
    return {
        user: state.user,
        status: state.user.status
    }
},{signIn})(LoginForm)
