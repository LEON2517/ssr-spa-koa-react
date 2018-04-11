import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsBk extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-bk__container">
                <div className="row vds-bk-img__md">
                    <div className="col vds-bk__col ">

                        <div className="vds-bk__block_info">
                            <h3 className="vds-bk__h3">Безопасные ставки</h3>
                            <p className="vds-bk__p">Делайте ставки в любимых букмекерских конторах без рисков. Доверьте профессионалам команды ARBITRAGE BETS настройку системы для мультиаккаунтов.</p>
                            <Link to="/sign_up">
                                <button className="btn  btn-md  btn-primary vds-bk__btn" type="button">
                                    Купить VDS
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}


export default VdsBk