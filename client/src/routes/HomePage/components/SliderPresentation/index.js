import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.css'


class SliderPresentation extends Component {

    render() {
        const { articles } = this.props;

        return (
            <div className="container-fluid">

                <div className="row align-items-center slider-presentation__row">

                    <div className="col"/>
                    <div className="col-8 text-center block-center">

                        <h1 className="slider-presentation__h1">{articles.response[0].presentation.title}</h1>
                        <h2 className="slider-presentation__h2">{articles.response[0].presentation.text}</h2>

                        <div className="form-inline slider-presentation__btn_centre">
                            <Link to="/sign_in"><button className="btn btn-homepage btn-lg  btn-outline-main slider-presentation__btn_margin" type="button">Log in</button></Link>
                            <Link to="/sign_up"><button className="btn btn-homepage btn-lg  btn-primary" type="button">Join</button></Link>
                        </div>
                    </div>

                    <div className="col"/>

                </div>
            </div>
        )
    }
}

export default SliderPresentation