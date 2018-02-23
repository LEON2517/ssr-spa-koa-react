import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar'

import './style.css'


class VDS extends Component {

    render() {
        const { user, history } = this.props;

        return (
            <div className="panel-information__col-10_wight">

                <div className="row">
                    <div className="col">
                        <div className="card card-body__wight">
                            <div className="card-header">
                                Пополните свой счет, чтобы начать
                            </div>
                            <div className="card-body">
                                <p className="card-text">Перед началом использования счета своей учетной записи удостоверьтесь, что на нем достаточно средств. Благодаря вариантам мгновенных
                                    и отложенных платежей практически в любом регионе получение средств на свой счет никогда не было проще.</p>
                                <a href="#" className="btn btn-primary btn-custom">Пополнение счета</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="hr panel-information__hr"/>

            </div>



        )
    }
}

export default VDS