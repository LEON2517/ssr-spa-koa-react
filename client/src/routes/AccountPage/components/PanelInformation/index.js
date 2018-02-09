import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'


class PanelInformation extends Component {

    render() {
        const { form } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col castomclass">
                        <h2 className="">{form.accountUserInfo.firstName}</h2>
                        <h2 className="">{form.accountUserInfo.lastName}</h2>
                        <h2 className="">{form.accountUserInfo.private}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PanelInformation