import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'


class PanelInformation extends Component {

    render() {
        const { user } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 castomclass">
                        <div className="top-bar">
                            <div className="row row__balance">
                                <h3 className="panel-information__h3_balance">Баланс: {user.accountUserInfo.balance}</h3>
                            </div>
                            <div className="row row__navigation">
                                <h3 className="panel-information__h3_navigation">НАВИГАЦИЯ</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Учетная запись</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Пополнение счета</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">VDS</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Proxy</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Cash-Back</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Аффилейт</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Параметры</h3>
                            </div>
                            <div className="row row__account">
                                <h3 className="panel-information__h3">Поддержка</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-10">

                        <div className="panel-information__col-10_wight">

                            <div className="row">
                                <div className="col">
                                    <div className="card card-body__wight">
                                        <div className="card-header">
                                            Пополните свой счет, чтобы начать
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">Перед началом использования счета своей учетной записи ARBITRAGE BETS удостоверьтесь, что на нем достаточно средств. Благодаря вариантам мгновенных
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

                </div>
            </div>
        )
    }
}

export default PanelInformation