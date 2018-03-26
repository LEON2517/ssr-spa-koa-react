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
                        <h2 className="">СЧЕТА</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">

                        <table className="table table-bordered bills__table">
                            <thead className="">
                            <tr>
                                <th>Услуга</th>
                                <th>Тариф</th>
                                <th>Геолокация</th>
                                <th>Ожидание смены IP</th>
                                <th>Количество дней</th>
                                <th>Количество VDS</th>
                                <th>Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{user.tariffsUserInfo.service}</td>
                                <td>{user.tariffsUserInfo.tariffs}</td>
                                <td>{user.tariffsUserInfo.checkboxVdsClassicRU ||
                                user.tariffsUserInfo.checkboxVdsClassicUA ||
                                user.tariffsUserInfo.checkboxVdsClassicUK ||
                                user.tariffsUserInfo.checkboxVdsProRU ||
                                user.tariffsUserInfo.checkboxVdsProUA ||
                                user.tariffsUserInfo.checkboxVdsProUK}</td>
                                <td>{user.tariffsUserInfo.checkboxVdsProProxyLimit ||
                                user.tariffsUserInfo.checkboxVdsProProxyUnlimit}</td>
                                <td>{user.tariffsUserInfo.inputVdsClassicDay}</td>
                                <td>{user.tariffsUserInfo.inputVdsClassicVds}</td>
                                <td>100$</td>
                            </tr>
                            </tbody>
                        </table>

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




