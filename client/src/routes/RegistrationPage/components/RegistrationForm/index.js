import React, { Component } from 'react';

import {Link, NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {signUp} from '../../../../actions'

import './style.css'

class RegistrationForm extends Component {

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
            <div className="container registration-form__container_size">
                <div className="card">
                    <div className="card-body">

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="InputData">Персональные данные</label>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        className={errors.firstName && touched.firstName ? 'text-input error' : 'text-input'}
                                        placeholder="Имя"/>
                                    {touched.firstName && errors.firstName && <div className="input-feedback">{errors.firstName}</div>}
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        className={errors.lastName && touched.lastName ? 'text-input error' : 'text-input'}
                                        placeholder="Фамилия"/>
                                    {touched.lastName && errors.lastName && <div className="input-feedback">{errors.lastName}</div>}
                                </div>
                            </div>

                            <label htmlFor="InputData" className="registration-page__email_margin">Адрес электронной почты</label>
                            <hr/>
                            <div className="row">
                                <div className="col-12">
                                    <small className="form-text text-muted">
                                        Используемый для входа в свой аккаунт.
                                    </small>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                                        placeholder="Адрес электронной почты"/>
                                    {touched.email && errors.email && <div className="input-feedback">{errors.email}</div>}
                                </div>
                            </div>

                            <label htmlFor="InputData" className="registration-page__password_margin">Пароль</label>
                            <hr/>
                            <div className="row">
                                <small className="form-text text-muted registration-page__small_pas">
                                    Должен содержать минимум 8 символов включая хотя бы 1 цифру и 1 заглавную букву.
                                </small>
                                <div className="col">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className={errors.password && touched.password ? 'text-input error' : 'text-input'}
                                        placeholder="Пароль"/>
                                    {touched.password && errors.password && <div className="input-feedback">{errors.password}</div>}
                                </div>
                                <div className="col">
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.passwordConfirm}
                                        className={errors.passwordConfirm && touched.passwordConfirm ? 'text-input error' : 'text-input'}
                                        placeholder="Подтвердить пароль"/>
                                    {touched.passwordConfirm && errors.passwordConfirm && <div className="input-feedback">{errors.passwordConfirm}</div>}
                                </div>
                            </div>

                            <div className="form-check registration-page__form-check_margin">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        name="checkboxData"
                                        className="form-check-input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.checkboxData}/> Я даю свое согласие на сбор, обработку и хранение моих персональных данных
                                    {touched.checkboxData && errors.checkboxData && <div className="input-feedback">{errors.checkboxData}</div>}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        className="form-check-input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.checkbox}/> Я прочитал(-а) и соглашаюсь с <Link to="">Пользовательское соглашение.</Link>
                                    {touched.checkbox && errors.checkbox && <div className="input-feedback">{errors.checkbox}</div>}
                                </label>
                            </div>

                            <div>{message}</div>

                            <button className="btn btn-primary btn-lg btn-block registration-form__btn" type="submit" disabled={isSubmitting}>
                                Зарегистрировать аккаунт
                            </button>

                        </form>
                    </div>
                </div>
                <div className="registration-form__input_login">
                    <h4 className="registration-form__h4">Уже есть аккаунт? <Link to="/sign_in">Вход</Link></h4>
                </div>
            </div>
        );

        const Form = withFormik({
            mapPropsToValues: props => ({ email: '', password: '', firstName: '', lastName: '' , passwordConfirm: '', checkbox: false, checkboxData: false}),
            validate: (values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Укажите действительный адрес электронной почты.';
                } if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Укажите действительный адрес электронной почты.';
                } if (!values.password || values.password.length < 8) {
                    errors.password = 'Пароль должен содержать минимум 8 символов включая хотя бы 1 цифру и 1 заглавную букву.';
                } if (!values.passwordConfirm || !(values.passwordConfirm == values.password)) {
                    errors.passwordConfirm = 'Введенные пароли не совпадают.';
                } if (!values.firstName) {
                    errors.firstName = 'Необходимо ввести имя.';
                } if (!values.lastName) {
                    errors.lastName = 'Необходимо ввести фамилию.';
                } if (values.checkbox == false) {
                    errors.checkbox = 'Необходимо подтвердить.';
                } if (values.checkboxData == false) {
                    errors.checkboxData = 'Необходимо подтвердить.';
                }
                return errors;
            },
            handleSubmit: (values) => {
                this.props.signUp(values);
            },
        })(InnerForm);


        return (
            <div>
                <Form />
            </div>
        )
    }
}

export default connect(state => {
    return {
        user: state.user,
        status: state.user.status
    }
},{signUp})(RegistrationForm)