import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import classNames from 'classnames'
import Plx from 'react-plx';

class VdsInfo extends Component {
    static propTypes = {

    };

    state = {
        hardware: true,
        os: false,
        browser: false
    };

    render() {
        const Parallax1X2 = [
            {
                start: 0,
                duration: 350,
                properties: [
                    {
                        startValue: 190,
                        endValue: 400,
                        property: "translateX"
                    }
                ]
            }
        ];

        const Parallax1fg2 = [
            {
                start: 0,
                duration: 350,
                properties: [
                    {
                        startValue: -170,
                        endValue: -500,
                        property: "translateX"
                    }
                ]
            }
        ];

        const vdsInfoClassH3Hardware = classNames({
            'vds-info__h3': true,
            'vds-info__h3_active': this.state.hardware
        });

        const vdsInfoClassH3OS = classNames({
            'vds-info__h3': true,
            'vds-info__h3_active': this.state.os
        });

        const vdsInfoClassH3Browser = classNames({
            'vds-info__h3': true,
            'vds-info__h3_active': this.state.browser
        });

        const vdsInfoClassUnderline = classNames({
            'vds-info__h3': true,
            'row': true,
            'vds-info__row_block_one': true,
            'vds-info__row_block_border-hardware': this.state.hardware,
            'vds-info__row_block_border-os': this.state.os,
            'vds-info__row_block_border-browser': this.state.browser
        });

        return (
            <div className="container vds-info__container">

                <Plx
                    parallaxData={Parallax1X2}
                >
                    <img className="vds-presentation-img_1x2" src={require('./img/1x2d.png')}/>
                </Plx>

                <Plx
                    parallaxData={Parallax1fg2}
                >
                    <img className="vds-presentation-img_f1g2" src={require('./img/f1g2.png')}/>
                </Plx>


                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-info__h2">ДОБРО ПОЖАЛОВАТЬ В БУДУЩЕЕ АРБИТРАЖНЫХ СТАВОК</h2>
                    </div>
                </div>

                <div className={vdsInfoClassUnderline}>
                    <div className="col text-center">
                        <h3 onClick={this.handleClickHardware} className={vdsInfoClassH3Hardware}>antiHARDWARE</h3>
                    </div>

                    <div className="col text-center">
                        <h3 onClick={this.handleClickOs} className={vdsInfoClassH3OS}>antiOS</h3>
                    </div>

                    <div className="col text-center" >
                        <h3 onClick={this.handleClickBrowser} className={vdsInfoClassH3Browser}>antiBROWSER</h3>
                    </div>
                </div>

                {this.getBody()}

            </div>
        )
    }


    getBody() {

        const hardware = this.state.hardware ? (
            <div>
                <div className="row__lg">
                    <div className="row vds-info__row_block_two">
                        <div className="col text-center">
                            <img className="vds-info__icon_bios" src={require('./icon/bios.png')}/>
                            <h3 className="slider-presentation__h3">BIOS</h3>
                            <p className="vds-info__p">147 уникальных параметров BIOS. Переписаны ACPI таблицы, сетевой адаптер и многое другое.</p>
                        </div>

                        <div className="col text-center">
                            <img className="vds-info__icon_cpu" src={require('./icon/cpu.png')}/>
                            <h3 className="slider-presentation__h3">CPU</h3>
                            <p className="vds-info__p">ID процессора, винчестера и материнской платы уникальны для каждой сборки VDS. </p>
                        </div>

                        <div className="col text-center">
                            <img className="vds-info__icon_gpu" src={require('./icon/gpu.png')}/>
                            <h3 className="slider-presentation__h3">GPU</h3>
                            <p className="vds-info__p">Интегрирована полноценная видеокарта. Реализована подмена WebGL и Canvas на всех уровнях.</p>
                        </div>
                    </div>
                </div>

                <div className="row__sm">
                    <div className="row ">

                        <div className="row">
                            <div className="col-3 vds-info__col_3">
                                <img className="vds-info__icon_bios" src={require('./icon/bios.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7">
                                <h3 className="slider-presentation__h3">BIOS</h3>
                                <p className="vds-info__p_sm">147 уникальных параметров BIOS. Переписаны ACPI таблицы, сетевой адаптер и многое другое.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3 vds-info__col_3">
                                <img className="vds-info__icon_cpu_sm" src={require('./icon/cpu.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7">
                                <h3 className="slider-presentation__h3">CPU</h3>
                                <p className="vds-info__p_sm">ID процессора, винчестера и материнской платы уникальны для каждой сборки VDS. </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3 vds-info__col_3">
                                <img className="vds-info__icon_gpu_sm" src={require('./icon/gpu.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7">
                                <h3 className="slider-presentation__h3">GPU</h3>
                                <p className="vds-info__p_sm">Интегрирована полноценная видеокарта. Реализована подмена WebGL и Canvas на всех уровнях.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ) : null;

        const os = this.state.os ? (
            <div>
                <div className="row__lg">
                    <div className="row vds-info__row_block_two">
                        <div className="col text-center">
                            <img className="vds-info__icon_acpi" src={require('./icon/acpi.png')}/>
                            <h3 className="slider-presentation__h3">РЕЕСТР</h3>
                            <p className="vds-info__p">194 уникальных параметра реестра.<br/>ID OS, SID, WSUS Client ID, Product ID, Serial Number и многое другое.</p>
                        </div>

                        <div className="col text-center">
                            <img className="vds-info__icon_network" src={require('./icon/network.png')}/>
                            <h3 className="slider-presentation__h3">СЕТЬ</h3>
                            <p className="vds-info__p">Весь трафик проходит через наши PROXY сервера. Мы гарантируем качество и уникальность IP.</p>
                        </div>

                        <div className="col text-center">
                            <img className="vds-info__icon_vm" src={require('./icon/vm.png')}/>
                            <h3 className="slider-presentation__h3">ГИПЕРВИЗОР</h3>
                            <p className="vds-info__p">Вырезаны все патерны виртуальной среды. Скрыто RDP подключение. Имитация «удобного» пользователя.</p>
                        </div>
                    </div>
                </div>

                <div className="row__sm">
                    <div className="row ">

                        <div className="row">
                            <div className="col-3">
                                <img className="vds-info__icon_acpi" src={require('./icon/acpi.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7_os">
                                <h3 className="slider-presentation__h3">РЕЕСТР</h3>
                                <p className="vds-info__p_sm">194 уникальных параметра реестра.<br/>ID OS, SID, WSUS Client ID, Product ID, Serial Number и многое другое.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <img className="vds-info__icon_network" src={require('./icon/network.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7_os">
                                <h3 className="slider-presentation__h3">СЕТЬ</h3>
                                <p className="vds-info__p_sm">Весь трафик проходит через наши PROXY сервера. Мы гарантируем качество и уникальность IP.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <img className="vds-info__icon_vm" src={require('./icon/vm.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7_os">
                                <h3 className="slider-presentation__h3">ГИПЕРВИЗОР</h3>
                                <p className="vds-info__p_sm">Вырезаны все патерны виртуальной среды. Скрыто RDP подключение. Имитация «удобного» пользователя.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        ) : null;

        const browser = this.state.browser ? (
            <div>
                <div className="row__lg">
                    <div className="row vds-info__row_block_two">
                        <div className="col text-center">
                            <img className="vds-info__icon_obraz" src={require('./icon/obraz.png')}/>
                            <h3 className="slider-presentation__h3">ОБРАЗЫ</h3>
                            <p className="vds-info__p">Реализована возможность вернуться к нужному аккаунту спустя любое <br/>время.</p>
                        </div>

                        <div className="col text-center">
                            <img className="vds-info__icon_obraz" src={require('./icon/plag.png')}/>
                            <h3 className="slider-presentation__h3">ПЛАГИНЫ</h3>
                            <p className="vds-info__p">Переписаны разрешения и плагины, благодаря чему каждый слепок браузера уникальный.</p>
                        </div>

                        <div className="col text-center">
                            <img className="vds-info__icon_obraz" src={require('./icon/gecko.png')}/>
                            <h3 className="slider-presentation__h3">ДВИЖОК</h3>
                            <p className="vds-info__p">У Mozilla Firefox открытый исходный код. Браузер прошит и модернизирован на уровне движка.</p>
                        </div>
                    </div>
                </div>

                <div className="row__sm">
                    <div className="row ">

                        <div className="row">
                            <div className="col-3">
                                <img className="vds-info__icon_obraz" src={require('./icon/obraz.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7_browser">
                                <h3 className="slider-presentation__h3">ОБРАЗЫ</h3>
                                <p className="vds-info__p_sm">Реализована возможность вернуться к нужному аккаунту спустя любое время.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <img className="vds-info__icon_obraz" src={require('./icon/plag.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7_browser">
                                <h3 className="slider-presentation__h3">ПЛАГИНЫ</h3>
                                <p className="vds-info__p_sm">Переписаны разрешения и плагины, благодаря чему каждый слепок браузера уникальный.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <img className="vds-info__icon_obraz" src={require('./icon/gecko.png')}/>
                            </div>
                            <div className="col-7 vds-info__col_7_browser">
                                <h3 className="slider-presentation__h3">ДВИЖОК</h3>
                                <p className="vds-info__p_sm">У Mozilla Firefox открытый исходный код. Браузер прошит и модернизирован на уровне движка.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        ) : null;

        return (
            <div>
                {hardware}
                {os}
                {browser}
            </div>
        )
    }

    handleClickHardware = () => {
        this.setState({
            hardware: true,
            os: false,
            browser: false
        })
    }

    handleClickOs = () => {
        this.setState({
            hardware: false,
            os: true,
            browser: false
        })
    }

    handleClickBrowser = () => {
        this.setState({
            hardware: false,
            os: false,
            browser: true
        })
    }
}


export default VdsInfo