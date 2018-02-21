import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'

import {NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {forgotPassword} from '../../actions'

import './style.css'


class ForgotPasswordPage extends Component {

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
                <small className="form-text text-muted">
                    Email
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
                <div>{message}</div>
                <button className="btn btn-md btn-primary forgot-password-page__btn forgot-password-page__btn_hover" type="submit" disabled={isSubmitting}>
                    Восстановить пароль
                </button>
            </form>
        );

        const Form = withFormik({
            mapPropsToValues: props => ({ email: '' }),
            validate: (values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Укажите действительный адрес электронной почты.';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Укажите действительный адрес электронной почты.';
                }
                return errors;
            },
            handleSubmit: (values) => {
                this.props.forgotPassword(values);
            },
        })(InnerForm);


        return (
            <div>
                <Header />
                <div className="container forgot-password-page___container_size">
                    <h2 className="forgot-password-page__h2">Восстановление пароля</h2>
                    <div className="card">
                        <div className="card-body">
                            <div className="">
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className="forgot-password-page__link_margin">
                        <NavLink to="/sign_in" activeClassName="forgot-password-page__link">&#60; Назад к странице входа</NavLink>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(state => {
    return {
        user: state.user,
        status: state.user.status
    }
},{forgotPassword})(ForgotPasswordPage)



