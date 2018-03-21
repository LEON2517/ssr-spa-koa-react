import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import classNames from 'classnames'

class VdsInfo extends Component {
    static propTypes = {

    };

    state = {
        hardware: true,
        os: false,
        browser: false
    };

    render() {

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

                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-info__h2">ДОБРО ПОЖАЛОВАТЬ В БУДУЩЕЕ АРБИТРАЖНЫХ СТАВОК</h2>
                    </div>
                </div>

                <div className={vdsInfoClassUnderline}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 onClick={this.handleClickHardware} className={vdsInfoClassH3Hardware}>antiHARDWARE</h3>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 onClick={this.handleClickOs} className={vdsInfoClassH3OS}>antiOS</h3>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center" >
                        <h3 onClick={this.handleClickBrowser} className={vdsInfoClassH3Browser}>antiBROWSER</h3>
                    </div>
                </div>

                {this.getBody()}

            </div>
        )
    }


    getBody() {

        const hardware = this.state.hardware ? (
            <div className="row vds-info__row_block_two">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <img className="vds-info__icon_bios" src={require('./icon/bios.png')}/>
                    <h3 className="slider-presentation__h3">BIOS</h3>
                    <p className="vds-info__p">Уникальное железо под каждый аккаунт на уровне BIOS.</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <img className="vds-info__icon_acpi" src={require('./icon/acpi.png')}/>
                    <h3 className="slider-presentation__h3">ACPI</h3>
                    <p className="vds-info__p">Переписанные на аssembler ACPI таблицы.  </p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <img className="vds-info__icon_vm" src={require('./icon/vm.png')}/>
                    <h3 className="slider-presentation__h3">VM</h3>
                    <p className="vds-info__p">Вырезаны и переписаны все патерны виртуальной среды.</p>
                </div>
            </div>
        ) : null;

        const os = this.state.os ? (
            <div className="row vds-info__row_block_two">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">4</h3>
                    <p className="vds-info__p">Уникальное железо под каждый аккаунт на уровне BIOS.</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">5</h3>
                    <p className="vds-info__p">Переписанные на аssembler ACPI таблицы.  </p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">6</h3>
                    <p className="vds-info__p">Вырезаны и переписаны все патерны виртуальной среды.</p>
                </div>
            </div>
        ) : null;

        const browser = this.state.browser ? (
            <div className="row vds-info__row_block_two">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">7</h3>
                    <p className="vds-info__p">Уникальное железо под каждый аккаунт на уровне BIOS.</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">8</h3>
                    <p className="vds-info__p">Переписанные на аssembler ACPI таблицы.  </p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">9</h3>
                    <p className="vds-info__p">Вырезаны и переписаны все патерны виртуальной среды.</p>
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