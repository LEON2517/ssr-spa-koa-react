import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import './style.css'

class PageRouter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="container-fluid page-router__carousel">

                <div className="row">

                    <div className="container  page-router__container_width">

                        <div className="row page-router__row  align-items-center">

                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 page-router_text">
                                <p className="page-router__p">Previous article</p>
                                <div><NavLink to="" className="page-router_link">Thinking in React</NavLink></div>
                            </div>


                            <div className="ccol-xl-4 col-lg-4 col-md-4 d-none d-md-block text-right">
                                <p className="page-router__p">Next article</p>
                                <div><NavLink to="" className="page-router_link">Thinking in React</NavLink></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}


export default PageRouter