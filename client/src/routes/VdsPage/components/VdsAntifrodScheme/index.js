import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsAntifrodScheme extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid">

                <div className="row vds-antidetect-scheme__container">
                    <div className="col">
                        <div className="vds-as__video_basic"/>
                    </div>

                    <div className="col">
                        <h3 className="slider-presentation__h3 vds-antidetect__h3">Как часто Ваши аккаунты блокируют?</h3>
                        <p className="vds-info__p">Приглашайте друзей присоединиться к вашему приключению, бросайте им вызов в многопользовательских матчах или позвольте им играть вместо вас, даже если у них нет этой игры.</p>
                    </div>
                </div>

            </div>

        )
    }
}


export default VdsAntifrodScheme