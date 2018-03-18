import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsPresentation extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid">
                <div className="row vds-presentation__row block-center">
                    <div className="col text-center">

                        <div className="vds-presentation__text">
                            <h1 className="slider-presentation__h1">VDS</h1>
                            <h2 className="slider-presentation__h2">Заряженная VDS: быстрее, мощнее, не уязвимие для антифрод систем. Попробуйте будущее беттинга.</h2>
                        </div>

                        <div className="form-inline vds-presentation__btn_centre">
                            <Link to="/forgot-recover/forgot-password">
                                <button className="btn btn-lg btn-outline-secondary vds-presentation__btn-outline-secondary" type="submit">
                                    &#9654;
                                    Познакомиться с VDS
                                </button>
                            </Link>
                            <Link to="/sign_up">
                                <button className="btn btn-homepage btn-lg  btn-primary" type="button">
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


export default VdsPresentation