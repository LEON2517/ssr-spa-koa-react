import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './style.css'

class Advantages extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props;

        return (
            <div className="container">
                <div className="row align-items-center advantages__row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_vds}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_vds}</p>
                        <NavLink to="/vds" className="advantages__link">Узнать больше ></NavLink>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_proxy}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_proxy}</p>
                        <NavLink to="" activeClassName="advantages__link">Узнать больше ></NavLink>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_cb}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_cb}</p>
                        <NavLink to="" activeClassName="advantages__link">Узнать больше ></NavLink>
                    </div>
                </div>

                <div className="hr"/>

                <div className="row">
                    <div className="col text-center">
                        <h2 className="advantages__h2">{articles.response[0].advantages[0].title_why_as}</h2>
                    </div>
                </div>

                <div className="row row__block_bottom_one">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_technologies}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_technologies}</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_service}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_service}</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_test}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_test}</p>
                    </div>
                </div>

                <div className="row row__block_bottom_second">
                    <div className="col-xl-2 col-lg-2"/>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_equipment}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_equipment}</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h3 className="slider-presentation__h3">{articles.response[0].advantages[0].title_support}</h3>
                        <p className="slider-presentation__p">{articles.response[0].advantages[0].text_support}</p>
                    </div>

                    <div className="col-xl-2 col-lg-2"/>
                </div>
            </div>

        )
    }
}


export default Advantages