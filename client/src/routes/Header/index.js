import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
import {logOut} from '../../actions'

import {connect} from 'react-redux'


class Header extends Component {
    static propTypes = {

    };


    render() {
        const {status} = this.props
        const buttonLog = status ? <button className="btn btn-homepage btn-sm align-middle btn-primary " type="button" onClick = {this.handleLogOut}>Log out</button>
            : <button className="btn btn-homepage btn-sm align-middle btn-outline-main btn-log " type="button">Log in</button>;

        const buttonReg = status ? null
            : <button className="btn btn-homepage btn-sm align-middle btn-primary" type="button">Join</button>;

        const linkAccount = status ? <div>Личный кабинет</div>
            : null;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-react">
                <Link to="/"><div className="navbar-brand" href="#">ARBITRAGE BETS</div></Link>
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
                                <a className="dropdown-item" href="#">VDS</a>
                                <a className="dropdown-item" href="#">Proxy</a>
                                <a className="dropdown-item" href="#">Cash-Back</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">FAQ</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <div className="header__link_position">
                            <NavLink to="/account/id" className="header__link">{linkAccount}</NavLink>
                        </div>
                        <Link to="/sign_in">{buttonLog}</Link>
                        <Link to="/sign_up">{buttonReg}</Link>
                    </form>

                </div>

            </nav>
        )
    }

    handleLogOut = () => {
        this.props.logOut();
    }
}

export default connect(state => {
    return {
        status: state.user.accountUserInfo
    }
},{logOut})(Header)