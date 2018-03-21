import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsReviews extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-reviews__container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="vds-reviews__h2">ОТЗЫВЫ</h2>
                    </div>
                </div>
            </div>

        )
    }
}


export default VdsReviews