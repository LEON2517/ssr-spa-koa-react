import React, { Component } from 'react'

import './style.css'


class NavBar extends Component {

    render() {
        const { user, history } = this.props;

        return (
            <div className="top-bar">
                <div className="row row__balance">
                    <h3 className="panel-information__h3_balance">Баланс: {user.accountUserInfo.balance}</h3>
                </div>
                <div className="row row__navigation">
                    <h3 className="panel-information__h3_navigation">НАВИГАЦИЯ</h3>
                </div>

                <div className="row row__account" onClick = {() => history.push(`/account/id`)}>
                    <h3 className="panel-information__h3">Учетная запись</h3>
                </div>

                <div className="row row__account" onClick = {() => history.push(`/account/bills`)}>
                    <h3 className="panel-information__h3">Счета</h3>
                </div>

                <div className="row row__account" onClick = {() => history.push(`/account/vds`)}>
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


        )
    }

}

export default NavBar