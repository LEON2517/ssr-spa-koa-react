import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'


class Footer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="container-fluid footer__container_bg">

                <div className="container">

                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-12 d-none d-sm-block">

                            <img className="footer__logo_w img-fluid " src={require('./logofooter.png')} />

                            <h2 className="footer__h2">LEON</h2>

                            <h3 className="footer___h3_logo">Copyright © 2017 LEON Inc.</h3>

                        </div>

                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">

                            <h3 className="footer__h3">VDS</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Быстрый старт</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >FAQ</NavLink></div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">

                            <h3 className="footer__h3">PROXY</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Быстрый старт</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >FAQ</NavLink></div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-xl-4 col-lg-4 d-none d-lg-block"/>

                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">

                            <h3 className="footer__h3">CASH-BACK</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Быстрый старт</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >FAQ</NavLink></div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">

                            <h3 className="footer__h3">CHANNELS</h3>

                            <div className="footer__link_margin-top">
                                <div><NavLink to="" >Telegram</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Vkontakte</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Facebook</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Twitter</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >YouTube</NavLink></div>
                            </div>

                        </div>

                    </div>

                    <div className="row footer__row_md-margin footer__row_display">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">

                            <h3 className="footer__h3">VPS</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Quick Start</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Thinking in React</NavLink></div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">

                            <h3 className="footer__h3">VPS</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Quick Start</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Thinking in React</NavLink></div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4"/>

                    </div>

                    <div className="row footer__row_display">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">

                            <h3 className="footer__h3">VPS</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Quick Start</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Thinking in React</NavLink></div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">

                            <h3 className="footer__h3">VPS</h3>

                            <div className="footer__link_margin-top">

                                <div><NavLink to="" >Quick Start</NavLink></div>
                                <div className="footer__link_margin"><NavLink to="" >Thinking in React</NavLink></div>

                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4"/>

                    </div>

                    <div className="row footer__row-w">

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 footer__row_display-logo">

                            <div className="footer__logo-centre">

                                <img className="footer__logo_w img-fluid " src={require('./logofooter.png')} />

                                <h2 className="footer__h2">LEON</h2>

                            </div>

                            <h3 className="footer___h3_logo">Copyright © 2017 LEON Inc.</h3>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}


export default Footer