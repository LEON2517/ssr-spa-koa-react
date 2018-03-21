import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsAntidetect extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-antidetect__container">

                <div className="row">
                    <div className="col text-center">
                            <h2 className="vds-as__h2">КАК РАБОТАЮТ АНТИДЕТЕКТ СИСТЕМЫ ARBITRAGE BETS?</h2>
                    </div>
                </div>

                <div className="row vds-as__row_block_one">
                    <div className="col">
                        <div className="vds-as__video_basic"/>
                    </div>

                    <div className="col">
                        <h3 className="slider-presentation__h3 vds-antidetect__h3">VDS</h3>
                        <p className="vds-info__p">Приглашайте друзей присоединиться к вашему приключению, бросайте им вызов в многопользовательских матчах или позвольте им играть вместо вас, даже если у них нет этой игры.</p>
                    </div>
                </div>

                <div className="row vds-as__row_block_one">

                    <div className="col">
                        <h3 className="slider-presentation__h3 vds-antidetect__h3">BROWSER</h3>
                        <p className="vds-info__p">Приглашайте друзей присоединиться к вашему приключению, бросайте им вызов в многопользовательских матчах или позвольте им играть вместо вас, даже если у них нет этой игры.</p>
                    </div>

                    <div className="col text-center">
                        <div className="vds-as__video_basic"/>
                    </div>

                </div>
            </div>

        )
    }
}


export default VdsAntidetect