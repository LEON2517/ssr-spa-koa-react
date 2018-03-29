import React, {Component} from 'react'
import FormClassic from './FormClassic'
import FormPro from './FormPro'
import {connect} from 'react-redux'
import {savingTariffs} from '../../../../../actions'
import './style.css'



class Root extends Component {

    state = {
        isSelectPro: true,
        isSelectClassic: false
    };

    render() {
        const { userLog } = this.props
        const { isSelectPro, isSelectClassic } = this.state

        const buttonPro = isSelectPro ? <button type="button" className="btn btn-primary text-center" onClick = {this.handleSelectPro}>Выбрано</button>
            : <button type="button" className="btn btn-secondary text-center" onClick = {this.handleSelectPro}>Выбрать</button>;

        const buttonClassic = isSelectClassic ? <button type="button" className="btn btn-primary text-center" onClick = {this.handleSelectClassic}>Выбрано</button>
            : <button type="button" className="btn btn-secondary text-center" onClick = {this.handleSelectClassic}>Выбрать</button>;

        //количество дней
        const oneDay = 1
        const sevenDay = 7
        const thirtyDay = 30

        //количество VDS
        // один VDS
        const oneVdsOneDay = 350*oneDay
        const oneVdssevenDay = 150*sevenDay
        const threeVdsthirtyDay = 75*thirtyDay

        // два VDS скидка 15%
        const twoVdsOneDay = (300*oneDay)*2
        const twoVdsSevenDay = (130*sevenDay)*2
        const twoVdsThirtyDay = (65*thirtyDay)*2

        // три VDS скидка 30%
        const threeVdsOneDay = (250*oneDay)*3
        const threeVdsSevenDay = (105*sevenDay)*3
        const threeVdsThirtyDay = (55*thirtyDay)*3

        //количество сборок
        const oneBuild = 350
        const sevenBuild = 2100
        const thirtyBuild = 7500

        return(
            <div className="container-fluid vds-tariffs__container">
                <div className="row">

                    <div className="col-9">
                        <div className="vds-tariffs__position_block">
                            <FormClassic buttonClassic = {buttonClassic}/>
                            <FormPro buttonPro = {buttonPro}/>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="vds-tariffs__text_block">
                            <p>250 руб за каждый день</p>
                            <p>Экономия 30%</p>
                            <p>Итого: {/*{values.payment}*/} руб</p>
                        </div>
                        <div className="">
                            <button
          /*                      name="selectTariff"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.selectTariff = true}
                                type="submit"
                                disabled={isSubmitting}*/
                                className="btn btn-primary text-center">Оплатить</button>
                        </div>
{/*
                        {touched.selectTariff && errors.selectTariff && <div className="input-feedback">{errors.selectTariff}</div>}
*/}
                    </div>
                </div>
            </div>
        )
    }

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
}

export default (connect(state => {
    return {
        isSelectPro: state.form.isSelectPro,
        isSelectClassic: state.form.isSelectClassic
    }
},{savingTariffs})(Root))