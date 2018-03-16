import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';

class VdsPresentation extends Component {
    static propTypes = {

    };

    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 2,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                color: "white"
            }
        };

        return (
            <div className="container-fluid">
                <div className="row row__vds-basic">

                    <div className="col text-center col__vds-basic_video">
                        <YouTube
                            videoId="0rvGzfwBQ_0"
                            opts={opts}
                            onReady={this._onReady}
                            className="col__vds-basic_video"
                        />
                    </div>

                    <div className="col col__vds-basic_text">

                        <div className="vds-basic_text">
                            <h3 className="slider-presentation__h3">Как работают антифрод системы?</h3>
                            <p className="slider-presentation__p">Приветствую на канале арбитраж бетс , в этом видео я постараюсь рассказать об антифрод системах и о параметрах по которым происходит идентификация пользователей
                                наверняка каждый из вас сталкивался с санкциями со стороны букмекерских контор таких как порезки максимумов, блокировка аккаунтов, запрос дополнительных документов , а так же отказ выплачивать выигрыши
                            </p>
                        </div>

                    </div>

                </div>

                <div className="row row__vds-basic">

                    <div className="col col__vds-basic_video">

                        <div className="vds-basic_text">
                            <h3 className="slider-presentation__h3">Как работают антифрод системы?</h3>
                            <p className="slider-presentation__p">Приветствую на канале арбитраж бетс , в этом видео я постараюсь рассказать об антифрод системах и о параметрах по которым происходит идентификация пользователей
                                наверняка каждый из вас сталкивался с санкциями со стороны букмекерских контор таких как порезки максимумов, блокировка аккаунтов, запрос дополнительных документов , а так же отказ выплачивать выигрыши
                            </p>
                        </div>

                    </div>

                    <div className="col col__vds-basic_text">

                        <YouTube
                            videoId="0rvGzfwBQ_0"
                            opts={opts}
                            onReady={this._onReady}
                            className="col__vds-basic_video"
                        />

                    </div>

                </div>
            </div>

        )
    }
}


export default VdsPresentation