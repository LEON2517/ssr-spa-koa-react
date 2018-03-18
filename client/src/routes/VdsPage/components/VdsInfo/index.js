import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class VdsInfo extends Component {
    static propTypes = {

    };

    state = {
        hardware: true,
        os: false,
        browser: false
    };

    render() {

        return (
            <div className="container vds-info__container">

                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-info__h2">ДОБРО ПОЖАЛОВАТЬ В БУДУЩЕЕ АРБИТРАЖНЫХ СТАВОК</h2>
                    </div>
                </div>

                <div className="row vds-info__row_block_one">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 onClick={this.handleClickHardware} className="slider-presentation__h3">antiHARDWARE</h3>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                        <h3 onClick={this.handleClickOs} className="slider-presentation__h3">antiOS</h3>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center" >
                        <h3 onClick={this.handleClickBrowser} className="slider-presentation__h3">antiBROWSER</h3>
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
                    <p className="slider-presentation__p">Уникальное железо под каждый аккаунт на уровне BIOS.</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <img className="vds-info__icon_acpi" src={require('./icon/acpi.png')}/>
                    <h3 className="slider-presentation__h3">ACPI</h3>
                    <p className="slider-presentation__p">Переписанные на аssembler ACPI таблицы.  </p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <img className="vds-info__icon_vm" src={require('./icon/vm.png')}/>
                    <h3 className="slider-presentation__h3">VM</h3>
                    <p className="slider-presentation__p">Вырезаны и переписаны все патерны виртуальной среды.</p>
                </div>
            </div>
        ) : null;

        const os = this.state.os ? (
            <div className="row vds-info__row_block_two">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">4</h3>
                    <p className="slider-presentation__p">Уникальное железо под каждый аккаунт на уровне BIOS.</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">5</h3>
                    <p className="slider-presentation__p">Переписанные на аssembler ACPI таблицы.  </p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">6</h3>
                    <p className="slider-presentation__p">Вырезаны и переписаны все патерны виртуальной среды.</p>
                </div>
            </div>
        ) : null;

        const browser = this.state.browser ? (
            <div className="row vds-info__row_block_two">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">7</h3>
                    <p className="slider-presentation__p">Уникальное железо под каждый аккаунт на уровне BIOS.</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">8</h3>
                    <p className="slider-presentation__p">Переписанные на аssembler ACPI таблицы.  </p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center">
                    <h3 className="slider-presentation__h3">9</h3>
                    <p className="slider-presentation__p">Вырезаны и переписаны все патерны виртуальной среды.</p>
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