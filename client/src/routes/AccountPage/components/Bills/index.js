import React, { Component } from 'react';

import {Link, NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {savingTariffs} from '../../../../actions'

import './style.css'

class Bills extends Component {

    render() {
        const { user } = this.props;

        return (

            <div className="panel-information__col-10_wight">
                <div className="row bills__row">
                    <div className="col">
                        <h2 className="">СЧЕТ</h2>
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
                                <th>Смена сборки</th>
                                <th>Смена IP</th>
                                <th>VDS</th>
                                <th>Сборка</th>
                                <th>Срок</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{user.tariffsUserInfo.service}</td>
                                <td>{user.tariffsUserInfo.tariffs}</td>
                                {/*геолокация*/}
                                <td>
                                    {user.tariffsUserInfo.checkboxVdsClassicRU || user.tariffsUserInfo.checkboxVdsClassicUA ||
                                    user.tariffsUserInfo.checkboxVdsClassicUK || user.tariffsUserInfo.checkboxVdsProRU ||
                                    user.tariffsUserInfo.checkboxVdsProUA || user.tariffsUserInfo.checkboxVdsProUK}
                                </td>
                                {/*смена сборки*/}
                                <td>
                                    {user.tariffsUserInfo.checkboxVdsClassicTimeUnlimit || user.tariffsUserInfo.checkboxVdsClassicTimeLimit
                                    || user.tariffsUserInfo.checkboxVdsProTimeUnlimit || user.tariffsUserInfo.checkboxVdsProTimeLimit}
                                </td>
                                {/*смена IP*/}
                                <td>
                                    {user.tariffsUserInfo.checkboxVdsProProxyLimit || user.tariffsUserInfo.checkboxVdsProProxyUnlimit || user.tariffsUserInfo.checkboxVdsProProxyNull}
                                </td>
                                {/*количество VDS*/}
                                <td>{user.tariffsUserInfo.selectVdsClassicVds || user.tariffsUserInfo.selectVdsProVds}</td>
                                {/*количество сборок*/}
                                <td>{user.tariffsUserInfo.selectVdsProBuild || user.tariffsUserInfo.selectVdsClassicBuild}</td>
                                {/*количество дней*/}
                                <td>{user.tariffsUserInfo.selectVdsClassicDay || user.tariffsUserInfo.selectVdsProDay}</td>
                                <td>100$</td>
                                <td>Не оплачен</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div className="row justify-content-end">
                    <div className="col col-auto">
                        <button type="submit" className="btn btn-secondary bills_col_button">Изменить</button>
                    </div>
                    <div className="col col-auto">
                        <button type="submit" className="btn btn-primary">Оплатить</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Bills




