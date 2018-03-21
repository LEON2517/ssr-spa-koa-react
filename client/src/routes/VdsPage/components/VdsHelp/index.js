import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'


class VdsHelp extends Component {
    static propTypes = {

    };

    render() {

        return (
            <div className="container-fluid vds-help__container">

                <div className="row">
                    <div className="col text-center">
                            <h2 className="vds-as__h2">ПОМОЩЬ И ПОДДЕРЖКА</h2>
                    </div>
                </div>

            </div>

        )
    }
}


export default VdsHelp