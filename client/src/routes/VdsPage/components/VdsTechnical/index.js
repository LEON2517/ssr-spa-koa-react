import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsTechnical extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-technical__container">

                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-info__h2">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
                    </div>
                </div>

                <div className="row vds-technical__row_block_one">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 className="slider-presentation__h3">2 CORE</h3>
                        <p className="slider-presentation__p">Под каждую сборку выделяется мощь 8 ядерного AMD Opteron™ 3280 2500 Mhz</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 className="slider-presentation__h3">4 GB</h3>
                        <p className="slider-presentation__p">Большой объем RAM DDR3 под самые высоконагруженные задачи</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 className="slider-presentation__h3">65 GB</h3>
                        <p className="slider-presentation__p">Невероятная скорость за счет быстрого SSD в сочетании с аппаратным RAID5</p>
                    </div>
                </div>

                <div className="row vds-technical__row_block_one">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 className="slider-presentation__h3">IP UP-TIME</h3>
                        <p className="slider-presentation__p">Стабильный белый IP адрес на весь срок жизни аккаунта. Без слетов.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 className="slider-presentation__h3">IP API</h3>
                        <p className="slider-presentation__p">Cмена IP адреса через API ,по нажатию кнопки в личном кабинете.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 className="slider-presentation__h3">IP UNLIMITE</h3>
                        <p className="slider-presentation__p">Безлимитное количество IP в месяц. Безлимитный трафик. Высокая скорость соединения.</p>
                    </div>
                </div>

            </div>

        )
    }
}


export default VdsTechnical