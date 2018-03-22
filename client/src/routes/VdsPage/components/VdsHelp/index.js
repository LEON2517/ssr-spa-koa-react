import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsHelp extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-help__container">

                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-help__h2">ПОМОЩЬ И ПОДДЕРЖКА</h2>
                        <p className="vds-help__p">Узнайте все, что вам нужно знать, чтобы начать играть на PlayStation VR – от подключения и настройки гарнитуры и PlayStation Camera, до советов, сколько пространства освободить в комнате, чтобы ничего не мешало игре.</p>
                        <Link to="/sign_up">
                            <button className="btn btn-md btn-primary vds-help__btn">
                                Задать вопрос
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        )
    }
}


export default VdsHelp