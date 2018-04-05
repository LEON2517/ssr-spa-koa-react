import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import Modal from 'react-modal';

class VdsAntifrod extends Component {
    static propTypes = {

    };

    state = {
        showModalBasic: false,
        showModalAdvanced: false
    }

    handleOpenModalAdvanced = () => {
        this.setState({ showModalAdvanced: true });
    }

    handleCloseModalAdvanced = () => {
        this.setState({ showModalAdvanced: false });
    }


    handleOpenModalBasic = () => {
        this.setState({ showModalBasic: true });
    }

    handleCloseModalBasic = () => {
        this.setState({ showModalBasic: false });
    }


    render() {

        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 1,
                rel: 0
            }
        };

        return (
            <div className="container-fluid vds-as__container">

                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-as__h2">КАК РАБОТАЮТ АНТИФРОД СИСТЕМЫ БУКМЕКЕРОВ?</h2>
                    </div>
                </div>

                <div className="row vds-as__row_block_one">
                    <div className="col text-center">

                        <div className="vds-as__video_basic" onClick={this.handleOpenModalBasic}>

                            <Modal
                                isOpen={this.state.showModalBasic}
                                onRequestClose={this.handleCloseModalBasic}
                                className="Modal"
                                overlayClassName="Overlay"
                            >
                                <button className="ModalBtn" onClick={this.handleCloseModalBasic}>
                                    <img className="vds-af__icon_cross" src={require('./icon/cross.png')}/>
                                </button>
                                <YouTube
                                    videoId="wfSkcNuI45A"
                                    opts={opts}
                                />
                            </Modal>

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

                        <div className="vds-as__video_advanced" onClick={this.handleOpenModalAdvanced}>

                            <Modal
                                isOpen={this.state.showModalAdvanced}
                                onRequestClose={this.handleCloseModalAdvanced}
                                className="Modal"
                                overlayClassName="Overlay"
                            >
                                <button className="ModalBtn" onClick={this.handleCloseModalAdvanced}>
                                    <img className="vds-af__icon_cross" src={require('./icon/cross.png')}/>
                                </button>
                                <YouTube
                                    videoId="0rvGzfwBQ_0"
                                    opts={opts}
                                />
                            </Modal>

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