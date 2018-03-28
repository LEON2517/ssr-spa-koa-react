import React, { Component } from 'react';

import {Link, NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {savingTariffs} from '../../../../actions'

import './style.css'

class Bills extends Component {

    render() {
        const { user } = this.props;

        if (user.tariffsUserInfo.checkboxVdsClassicRU) {
            user.tariffsUserInfo.checkboxVdsClassicRU = 'RU'
        } if (user.tariffsUserInfo.checkboxVdsClassicUA) {
            user.tariffsUserInfo.checkboxVdsClassicUA = 'UA'
        } if (user.tariffsUserInfo.checkboxVdsClassicUK) {
            user.tariffsUserInfo.checkboxVdsClassicUK = 'UK'
        } if (user.tariffsUserInfo.checkboxVdsProRU) {
            user.tariffsUserInfo.checkboxVdsProRU = 'RU'
        } if (user.tariffsUserInfo.checkboxVdsProUA) {
            user.tariffsUserInfo.checkboxVdsProUA = 'UA'
        } if (user.tariffsUserInfo.checkboxVdsProUK) {
            user.tariffsUserInfo.checkboxVdsProUK = 'UK'
        } if (user.tariffsUserInfo.checkboxVdsProProxyLimit) {
            user.tariffsUserInfo.checkboxVdsProProxyLimit = '20-30 сек'
        } if (user.tariffsUserInfo.checkboxVdsProProxyUnlimit) {
            user.tariffsUserInfo.checkboxVdsProProxyUnlimit = 'Без ожидания'
        }

        return (

            <div className="panel-information__col-10_wight">
                <div className="row bills__row">
                    <div className="col">
                        <h2 className="">ОПЛАТА</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">

                        <h3>ROBOKASSA.RU</h3>
                        <p>ROBOKASSA — это сервис, позволяющий Продавцам (интернет-магазинам, поставщикам услуг) принимать платежи от клиентов	с
                            помощью банковских карт, в любой электронной валюте, с помощью сервисов мобильная коммерция (МТС, Мегафон, Билайн), платежи
                            через интернет-банк ведущих Банков РФ, платежи через банкоматы, через терминалы мгновенной оплаты, а также с помощью приложения дляiPhone.
                            Система берет комиссию за обмен денег.</p>
                    </div>
                </div>

                <div className="row justify-content-end">
                    <div className="col col-auto">
                        <button type="submit" className="btn btn-primary">Оплатить</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Bills
