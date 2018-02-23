import React, { Component } from 'react';

import {Link, NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {recoveryPassword} from '../../actions'

import './style.css'

class RecoverPasswordPage extends Component {

    render() {
        const {user, status } = this.props;
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

                            <label htmlFor="InputData" className="registration-page__password_margin">Новый пароль</label>
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

                            <div>{message}</div>

                            <button className="btn btn-md btn-primary forgot-password-page__btn forgot-password-page__btn_hover" type="submit" disabled={isSubmitting}>
                                Сохранить пароль
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        );

        const passwordResetToken = this.props.match.params.passwordResetToken;

        const Form = withFormik({
            mapPropsToValues: props => ({ password: '', passwordConfirm: '', passwordResetToken: passwordResetToken}),
            validate: (values) => {
                const errors = {};
                if (!values.password || values.password.length < 8) {
                    errors.password = 'Пароль должен содержать минимум 8 символов включая хотя бы 1 цифру и 1 заглавную букву.';
                } if (!values.passwordConfirm || !(values.passwordConfirm == values.password)) {
                    errors.passwordConfirm = 'Введенные пароли не совпадают.';
                }
                return errors;
            },
            handleSubmit: (values) => {
                this.props.recoveryPassword(values);
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
},{recoveryPassword})(RecoverPasswordPage)