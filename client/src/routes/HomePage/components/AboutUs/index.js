import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Reviews extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props;

        return (
            <div className="container">

                <div className="row">

                    <div className="col text-center">

                        <h2 className="advantages__h2">{articles.response[0].about.title}</h2>

                    </div>

                </div>

                <div className="row">

                    <div className="col"/>

                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">

                        <h3 className="slider-presentation__h3">{articles.response[0].about.text}</h3>

                        <p className="slider-presentation__p">Мы не просто производим «оружие», мы в эпицентре событий, на самом фронте.
                            Мы сами используем наши инструменты и готовы делиться опытом.
                            Каждый день мы начинаем с анализа новинок в сфере антифрод систем и внедряим их в наши продукты.
                            Мы всегда на 10 шагов впереди конкурентов.  Пользуйтесь услугами профессионалов. </p>

                        <p className="slider-presentation__p">Мы не просто производим «оружие», мы в эпицентре событий, на самом фронте.
                            Мы сами используем наши инструменты и готовы делиться опытом.
                            Каждый день мы начинаем с анализа новинок в сфере антифрод систем и внедряим их в наши продукты.
                            Мы всегда на 10 шагов впереди конкурентов.  Пользуйтесь услугами профессионалов. </p>

                    </div>

                    <div className="col"/>

                </div>

            </div>

        )
    }
}


export default Reviews