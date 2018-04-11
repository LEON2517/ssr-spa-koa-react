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
                                        <h3 className="vds-reviews_h3">Mopos</h3>
                                        <p className="vds-reviews__p">Отличный сервис! VDS ARBITRAGE BETS это единственный способ комфортной работы с букмекерами не
                                            переплачивая средств оптимизировать риски, в сервисе ARBITRAGE BETS свои потребности я могу реализовать полностью.
                                            Чистый IP , уникальность каждой сборки и стабильная работа не оставляют им конкурсентов на рынке.</p>
                                        <NavLink to="" activeClassName="vds-reviews__link">darkmoney.cc</NavLink>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="vds-reviews__text">
                                        <h3 className="vds-reviews_h3">Andi28</h3>
                                        <p className="vds-reviews__p">Я долго искал похожий сервис, пытался сам изобретать велосипеды, ответственно заявляю, что такого качества просто нет ни в России ни в мире.
                                            Ребята профессионалы и новаторы, благодаря им я вывел на новый уровень работу с БК. Аккаунты живут долго, проблем с выводом нет,
                                            забыл про запросы кипы документов после транакций. Спасибо Вам огромное! </p>
                                        <NavLink to="" activeClassName="vds-reviews__link">darkmoney.cc</NavLink>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="vds-reviews__text">
                                        <h3 className="vds-reviews_h3">Dange</h3>
                                        <p className="vds-reviews__p">Для меня было очень важно качество IP ,я обратился к сервису ARBITRAGE BETS и был удивлен - кристально чистые IP , с возможностью менять их
                                        по запросу, а VDS сервера с уникализацией системы - ноухау которое вывело на новый уровень мой бизнес. Прощайте дедики и не качественные соксы , теперь я наконец могу работать и
                                        не переживать за свои деньги на счетах.</p>
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