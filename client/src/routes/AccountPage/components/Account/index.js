import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'


class Account extends Component {

    render() {
        const { user } = this.props;

        return (
            <div>

                <div className="panel-information__col-10_wight">

                    <div className="row">
                        <div className="col">
                            <div className="card card-body__wight">
                                <div className="card-header">
                                    Пополните свой счет, чтобы начать
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Перед началом использования счета своей учетной записи  удостоверьтесь, что на нем достаточно средств. Благодаря вариантам мгновенных
                                        и отложенных платежей практически в любом регионе получение средств на свой счет никогда не было проще.</p>
                                    <a href="#" className="btn btn-primary btn-custom">Пополнение счета</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-body__wight">
                                <div className="card-header">
                                    Обзор учетной записи
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">Имя: {user.accountUserInfo.firstName}</li>
                                        <li className="list-group-item">Фамилия: {user.accountUserInfo.lastName}</li>
                                        <li className="list-group-item">Email: {user.accountUserInfo.email}</li>
                                        <li className="list-group-item">Private: {user.accountUserInfo.private}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row panel-information__row_top">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Активные VDS</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">0</h6>
                                    <p className="card-text">Похоже у вас нет активных VDS. Оформить заказ?</p>
                                </div>
                                <div className="hr panel-information__hr_card"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Активные Proxy</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">0</h6>
                                    <p className="card-text">Похоже у вас нет активных Proxy. Оформить заказ?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cash-Back</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">0</h6>
                                    <p className="card-text">Услуга Cash-Back не активна. Подключить услугу?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Аффилейт</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">0</h6>
                                    <p className="card-text">Партнерская программа - зарабатывай с нами!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="hr panel-information__hr"/>

            </div>

        )
    }
}

export default Account