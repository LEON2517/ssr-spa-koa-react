import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link, NavLink } from 'react-router-dom'


class VdsReviews extends Component {
    static propTypes = {

    };

    render() {

        return (


            <div className="container-fluid vds-reviews__container">

                <div className="row">
                    <div className="col text-center">

                        <h2 className="vds-reviews__h2">ОТЗЫВЫ</h2>

                    </div>
                </div>

                <div className="row">
                    <div className="col vds-reviews__col">

                        <div id="carouselExampleControls" className="carousel slide vds-reviews__carousel_margin" data-ride="carousel" data-interval="10000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="vds-reviews__text">
                                        <h3 className="">Mopos1</h3>
                                        <p>Отличный сервис! Мобильные прокси это единственный способ комфортного спама Вконтакте не
                                            переплачивая средств, в сервисе AirSocks свои потребности я могу реализовать полностью.
                                            Отличная скорость передачи данных , большой выбор мобильных операторов,
                                            возможность подключения индивидуальных каналов, также главным является тот факт что от данного
                                            сервиса у меня только положительные эмоции ведь его работа -стабильная, а </p>
                                        <NavLink to="" activeClassName="vds-reviews__link">darkmoney.cc</NavLink>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="vds-reviews__text">
                                        <h3 className="">Mopos2</h3>
                                        <p>Отличный сервис! Мобильные прокси это единственный способ комфортного спама Вконтакте не
                                            переплачивая средств, в сервисе AirSocks свои потребности я могу реализовать полностью.
                                            Отличная скорость передачи данных , большой выбор мобильных операторов,
                                            возможность подключения индивидуальных каналов, также главным является тот факт что от данного
                                            сервиса у меня только положительные эмоции ведь его работа -стабильная, а </p>
                                        <NavLink to="" activeClassName="vds-reviews__link">darkmoney.cc</NavLink>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="vds-reviews__text">
                                        <h3 className="">Mopos3</h3>
                                        <p>Отличный сервис! Мобильные прокси это единственный способ комфортного спама Вконтакте не
                                            переплачивая средств, в сервисе AirSocks свои потребности я могу реализовать полностью.
                                            Отличная скорость передачи данных , большой выбор мобильных операторов,
                                            возможность подключения индивидуальных каналов, также главным является тот факт что от данного
                                            сервиса у меня только положительные эмоции ведь его работа -стабильная, а </p>
                                        <NavLink to="" activeClassName="vds-reviews__link">darkmoney.cc</NavLink>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}


export default VdsReviews