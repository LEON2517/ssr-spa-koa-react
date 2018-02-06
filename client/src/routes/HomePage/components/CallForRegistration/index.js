import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CallForRegistration extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="container-fluid call-for-registration__carousel">

                <div className="row">

                    <div className="container call-for-registration__container_width">

                            <div className="row call-for-registration__row align-items-center">

                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 call-for-registration_text">
                                    <h3 className="call-for-registration__h3">Не позволяйте букмекерам использовать Вас</h3>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">

                                    <form className="form-inline call-for-registration__btn">
                                        <button className="btn btn-lg  btn-outline-main btn-log " type="button">Log in</button>
                                        <button className="btn btn-lg  btn-primary" type="button">Join</button>
                                    </form>

                                </div>

                        </div>

                    </div>

                </div>

                <div className="row align-items-start call-for-registration__row_btn">

                    <div className="col"/>

                    <div className="text-center">

                        <form className="form-inline call-for-registration__btn_centre">
                            <button className="btn btn-lg  btn-outline-main btn-log " type="button">Log in</button>
                            <button className="btn btn-lg  btn-primary" type="button">Join</button>
                        </form>

                    </div>

                    <div className="col"/>

                </div>

            </div>

        )
    }
}


export default CallForRegistration