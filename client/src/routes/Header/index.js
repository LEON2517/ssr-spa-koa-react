import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Header extends Component {
    static propTypes = {

    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-react">
                <a className="navbar-brand" href="#">ARBITRAGE BETS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Услуги
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">VPS антидетект</a>
                                <a className="dropdown-item" href="#">CashBack</a>
                                <a className="dropdown-item" href="#">Аккаунты</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">FAQ</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <button className="btn btn-sm align-middle btn-outline-main btn-log " type="button">Log in</button>
                        <button className="btn btn-sm align-middle btn-primary" type="button">Join</button>
                    </form>

                </div>

            </nav>
        )
    }
}

export default Header