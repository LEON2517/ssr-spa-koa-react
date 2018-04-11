import React, { Component } from 'react';
import {connect} from 'react-redux'
import {savingTariffs} from '../../../../../actions'
import Form from './Form'

class Root extends Component {

    state = {
        isSelectPro: true,
        isSelectClassic: false,
    };

    handleSelectPro = () => {
        const {isSelectPro, isSelectClassic} = this.state
        if (isSelectPro == false && isSelectClassic == true) {
            this.setState({
                isSelectPro: !this.state.isSelectPro,
                isSelectClassic: !this.state.isSelectClassic
            })
        } else {
            this.setState({
                isSelectPro: !this.state.isSelectPro
            })
        }
    };

    handleSelectClassic = () => {
        const {isSelectPro, isSelectClassic} = this.state
        if (isSelectPro == true && isSelectClassic == false) {
            this.setState({
                isSelectPro: !this.state.isSelectPro,
                isSelectClassic: !this.state.isSelectClassic
            })
        } else {
            this.setState({
                isSelectClassic: !this.state.isSelectClassic
            })
        }
    };

    render() {

        const { userLog, savingTariffs } = this.props
        const { isSelectPro, isSelectClassic } = this.state

        console.log(this.props.savingTariffs)

        return (
            <div>
                <Form
                    savingTariffs = {savingTariffs}
                    isSelectPro= {isSelectPro}
                    isSelectClassic = {isSelectClassic}
                    handleSelectClassic = {this.handleSelectClassic}
                    handleSelectPro = {this.handleSelectPro}
                />
            </div>
        )
    }
}

export default (connect(state => {
    return {
        userLog: state.user.accountUserInfo
    }
},{savingTariffs})(Root))