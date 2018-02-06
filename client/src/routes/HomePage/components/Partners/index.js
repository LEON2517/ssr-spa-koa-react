import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Partners extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props;

        return (
            <div className="container-fluid partners__carousel">

                <div className="row align-items-center">

                    <div className="col text-center">

                            <h2 className="partners__h2">{articles.response[0].partners.title}</h2>

                    </div>

                </div>

                <div className="row partners__row_width">

                    <div className="col-xl-2 col-lg col-md-3 col-sm-4 col-xs-12 text-center">
                        <img className="partners__neteller img-fluid" src={require('./login/neteller.png')} />
                    </div>

                    <div className="col-xl-2 col-lg col-md-3 col-sm-4 d-none d-sm-block text-center">
                        <img className="partners__skrill" src={require('./login/skrill.png')} />
                    </div>

                    <div className="col-xl-2 col-lg col-md-3 col-sm-4 d-none d-sm-block text-center">
                        <img className="partners__williamhill " src={require('./login/williamhill.png')} />
                    </div>

                    <div className="col-xl-2 col-lg col-md-3 d-none d-md-block text-center">
                        <img className="partners__betfair" src={require('./login/betfair.png')} />
                    </div>

                    <div className="col-xl-2 col-lg d-none d-lg-block text-center">
                        <img className="partners__pinacle" src={require('./login/pinacle.png')} />
                    </div>

                    <div className="col-xl-2 d-none d-xl-block text-center">
                        <img className="partners__sbobet" src={require('./login/sbobet.png')} />
                    </div>

                </div>

            </div>

        )
    }
}


export default Partners