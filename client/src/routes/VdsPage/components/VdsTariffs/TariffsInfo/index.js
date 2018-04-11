import React, { Component } from 'react';
import './style.css'

class VdsTariffsInfo extends Component {

    render() {

        return (
            <div className="container-fluid vds-tariffs__container">

                <div className="row ">
                    <div className="col text-center">
                        <h2 className="vds-tariffs__h2">ТАРИФЫ</h2>
                        <p className="vds-tariffs__leble">Мы разработали очень гибкую систему, подберите тариф индивидуально для себя</p>
                    </div>
                </div>

                <div className="row row__block_info_tariffs">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Количество VDS</h3>
                        <p className="slider-presentation__p">VDS – выделенный сервер для работы. Для каждого VDS резервируется мощность сервера.
                            Вы можете одновременно запускать и работать с такого количества VDS , которое закажите.
                            Каждый VDS является уникальным.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Количество сборок</h3>
                        <p className="slider-presentation__p">Сборка – операция ,  в процессе которой удаляется старый использованный VDS ,
                            создается совершенно новый VDS, настраивается специалистами и передается клиенту.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Количество дней</h3>
                        <p className="slider-presentation__p">Вы можете выбрать на какое количество дней планируется арендовать систему.  Мы предоставляем возможность лимитов на 1 день, неделю или месяц.
                            Если необходим более гибкий план – обратитесь в поддержку.</p>
                    </div>
                </div>

                <div className="row row__block_bottom_second row__block_info_tariffs">

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Геолокация</h3>
                        <p className="slider-presentation__p">Выберите страну, в которой планируете работать. На данный момент доступны Россия, Украина и Великобритания.
                            Если ни одна локация не подходит - обратитесь в поддержку, мы постараемся помочь.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="vds-tariffs__h3">Ожидание смены IP</h3>
                        <p className="vds-tariffs__p_top">В базовой конфигурация за вами закрепляется один PROXY сервер, IP можно менять как угодно часто, но с временным интервалом в 20-30 сек.
                      Если необходима мгновенной смены IP , выберите "Без ожидания" за Вами закрепляется сразу два сервера.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">Ожидание смены сборки</h3>
                        <p className="vds-tariffs__p_top">В базовой сборке за вами закрепляется один VDS сервер, пересборка VDS осуществляется в порядке очереди в течении 24 часов после запроса.
                            Если необходимо мгновенное переключение на новую сборку – выберите режим "Без ожидания".</p>
                    </div>

                </div>

            </div>
        )
    }
}


export default VdsTariffsInfo