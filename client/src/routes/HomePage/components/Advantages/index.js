import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Advantages extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props;

        return (
            <div className="container">
                <div className="row align-items-center advantages__row">

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_vds}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_vds}</p>
                        <button type="button" className="btn btn-link btn-lg advantages__btn-link_margin">Learn more ></button>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Cash-Back</h3>
                        <p className="slider-presentation__p">Получайте Cash Back и бонусные выплаты с каждой сделанной ставки и с каждого депозита.</p>
                        <button type="button" className="btn btn-link btn-lg advantages__btn-link_margin">Learn more ></button>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Accounts</h3>
                        <p className="slider-presentation__p">Порезка счета больше не повод прекратить игру. В наличии верифицированные счета и аккаунты.
                        </p>
                        <button type="button" className="btn btn-link btn-lg advantages__btn-link_margin">Learn more ></button>
                    </div>

                </div>

                <div className="hr"/>

                <div className="row">

                    <div className="col text-center">
                        <h2 className="advantages__h2">ПОЧЕМУ ВЫБИРАЮТ ARBITRAGE BETS?</h2>
                    </div>

                </div>

                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Передовые технологии</h3>
                        <p className="slider-presentation__p">Мы не просто производим «оружие», мы в эпицентре событий, на самом фронте.
                            Мы сами используем наши инструменты и готовы делиться опытом.
                            Каждый день мы начинаем с анализа новинок в сфере антифрод систем и внедряим их в наши продукты.
                            Мы всегда на 10 шагов впереди конкурентов.  Пользуйтесь услугами профессионалов. </p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Комплекстный сервис</h3>
                        <p className="slider-presentation__p">Мы не просто «изготавливаем оружие», мы так же заряжаем «обойму»
                            Антик+акаунты+кеш бек.
                            Вы получаете мощный настроенный сервер со скоростным интернетом. Уникальную сборку системы для работы с бк и полноценные инструменты для профессиональной работы.
                            К вашим услугам настроенная система со всей экосистемой необходимой профессионалу </p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Никаких котов в мешке</h3>
                        <p className="slider-presentation__p">Мы единсвтеные на рынке предлагаем полноценный продукт.
                            С железным и браузерным антидетектом. Каждый наш клиент имеет возможность проверить различными тестами конфигурацию системы на уникальность.
                            Ни каких котов в мешке.
                            Профессионально настроенная система под ваши задачи.
                            Гарантия защиты личных данных и полное их уничтожение после пересборки. </p>
                    </div>

                </div>

                <div className="row">

                    <div className="col-xl-2 col-lg-2"/>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Нет третьих сторон</h3>
                        <p className="slider-presentation__p">В отличие от наших конкурентов, которые используют третьи стороны, мы владеем и управляем 100% нашего оборудования,
                            программного обеспечения и сети, чтобы ваша конфиденциальность была защищена от сквозных задач.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Поддержка</h3>
                        <p className="slider-presentation__p">Мы помогаем решать сложные вопросы благодаря широкому кругу партнеров, а так же готовы оказывать поддержку и консультации по любым вопросам касающимся арбитража.
                            Добро пожаловать в команду.</p>
                    </div>

                    <div className="col-xl-2 col-lg-2"/>

                </div>
            </div>

        )
    }
}


export default Advantages