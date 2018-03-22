import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsAntifrod extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-as__container">

                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-as__h2">КАК РАБОТАЮТ АНТИФРОД СИСТЕМЫ БУКМЕКЕРОВ?</h2>
                    </div>
                </div>

                <div className="row vds-as__row_block_one">
                    <div className="col text-center">
                        <div className="vds-as__video_basic">
                            <div className="vds-as__video_play">
                                <div className="vds-as__video_play-icon"/>
                            </div>
                        </div>
                        <h3 className="slider-presentation__h3">BASIC</h3>
                        <div className="vds-antifrod_p">
                            <p className="vds-info__p">Приглашайте друзей присоединиться к вашему приключению, бросайте им вызов в многопользовательских матчах или позвольте им играть вместо вас.</p>
                        </div>
                    </div>

                    <div className="col text-center">
                        <div className="vds-as__video_advanced">
                            <div className="vds-as__video_play">
                                <div className="vds-as__video_play-icon"/>
                            </div>
                        </div>
                        <h3 className="slider-presentation__h3">ADVANCED</h3>
                        <div className="vds-antifrod_p">
                            <p className="vds-info__p">Приглашайте друзей присоединиться к вашему приключению, бросайте им вызов в многопользовательских матчах или позвольте им играть вместо вас.</p>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default VdsAntifrod