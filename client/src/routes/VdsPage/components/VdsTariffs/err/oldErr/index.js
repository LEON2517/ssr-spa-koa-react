import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {savingTariffs} from '../../../../../../actions'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './style.css'

class VdsTariffs extends Component {

    state = {
        isSelectPro: true,
        isSelectClassic: false
    };

    handleSelect = (selectChoice) => {

        setFieldValue('selectVdsClassicVdsId', selectChoice.value);
    };

    render() {
        const { userLog } = this.props
        const {isSelectPro, isSelectClassic} = this.state

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

        const options = [
            { value: 'Food', label: 'Food' },
            { value: 'Being Fabulous', label: 'Being Fabulous' },
            { value: 'Ken Wheeler', label: 'Ken Wheeler' },
            { value: 'ReasonML', label: 'ReasonML' },
            { value: 'Unicorns', label: 'Unicorns' },
            { value: 'Kittens', label: 'Kittens' },
        ];

        const InnerForm = ({
                               values,
                               touched,
                               errors,
                               dirty,
                               isSubmitting,
                               handleChange,
                               setFieldValue,
                               handleBlur,
                               handleSubmit,
                               handleReset,
                           }) => (
            <div className="container-fluid vds-tariffs__container">

                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-9">

                            <div className="vds-tariffs__position_block">

                                <table className="table table-bordered vds-tariffs__table_classic table-curved ">
                                    <thead>
                                    <tr className="">
                                        <th colSpan={2} className="text-center">CLASSIC</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="w-50">VDS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td scope="row">
                                            <p className="vds-tariffs__p">CPU: 2500 Mhz</p>
                                            <p className="vds-tariffs__p">RAM: 4 GB</p>
                                            <p className="vds-tariffs__p">SSD + RAID5: 65 GB</p>
                                            <p className="vds-tariffs__p">Ожидание смены сборки:</p>

                                            <div className="vds-tariffs__block_checkbox">
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsClassicTimeLimit"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsClassicTimeLimit}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">24 часа</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsClassicTimeUnlimit"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsClassicTimeUnlimit}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.checkboxVdsClassicTimeLimit || touched.checkboxVdsClassicTimeUnlimit) && errors.checkboxVdsClassicTime && <div className="input-feedback">{errors.checkboxVdsClassicTime}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="">

                                            <p className="vds-tariffs__p">Геолокация:</p>

                                            <div className="vds-tariffs__block_checkbox">
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsClassicRU"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsClassicRU}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">RU</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsClassicUA"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsClassicUA}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UA</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsClassicUK"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsClassicUK}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UK</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.checkboxVdsClassicRU || touched.checkboxVdsClassicUA || touched.checkboxVdsClassicUK) && errors.checkboxVdsClassicGeo && <div className="input-feedback">{errors.checkboxVdsClassicGeo}</div>}

                                            <div className="form-group">
                                                <label className="t" htmlFor="inlineFormCustomSelect">Количество VDS:</label>
                                                <VirtualizedSelect
                                                    name="selectVdsClassicVdsId"
                                                    defaultValue = "2 VDS"
                                                    onBlur={handleBlur}
                                                    value={values.selectVdsClassicVdsId}
                                                    options={selectVdsClassicVds}
                                                    onChange={this.handleSelect}/>
                                            </div>

                                            <div className="form-group">
                                                <label className="t" htmlFor="inlineFormCustomSelect">Выберите количество сборок:</label>
                                                <select
                                                    name="selectVdsClassicBuild"
                                                    className="form-control "
                                                    id="exampleFormControlSelect2"
                                                    defaultValue = "7 сборок"
                                                    onChange={setFieldValue('selectVdsClassicBuild')} value={values.selectVdsClassicBuild}
                                                    onBlur={handleBlur}>
                                                    <option value="1 сборка">1 сборка</option>
                                                    <option selected value="7 сборок">7 сборок</option>
                                                    <option value="30 сборок">30 сборок</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="" htmlFor="inlineFormCustomSelect">Выберите количество дней:</label>
                                                <select
                                                    name="selectVdsClassicDay"
                                                    className="form-control "
                                                    id="exampleFormControlSelect3"
                                                    defaultValue = "30 дней"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="1 день">1 день</option>
                                                    <option value= "7 дней">7 дней</option>
                                                    <option selected value="30 дней">30 дней</option>
                                                </select>
                                            </div>

                                            <div className="text-center">
                                                {buttonClassic}
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>


                                {/*PRO*/}


                                <table className="table table-bordered vds-tariffs__table table-curved-pro ">
                                    <thead>
                                    <tr className="">
                                        <th colSpan={2} className="text-center">PRO</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="w-50">VDS</th>
                                        <th className="w-50">PROXY</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td scope="row">
                                            <p className="vds-tariffs__p">CPU: 2500 Mhz</p>
                                            <p className="vds-tariffs__p">RAM: 4 GB</p>
                                            <p className="vds-tariffs__p">SSD + RAID5: 65 GB</p>
                                            <p className="vds-tariffs__p">Ожидание смены сборки:</p>

                                            <div className="vds-tariffs__block_checkbox">
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsProTimeLimit"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsProTimeLimit}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">24 часа</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsProTimeUnlimit"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsProTimeUnlimit}/>
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.checkboxVdsProTimeLimit || touched.checkboxVdsProTimeUnlimit)  && errors.checkboxVdsProTime && <div className="input-feedback">{errors.checkboxVdsProTime}</div>}
                                        </td>

                                        <td>
                                            <div className="">
                                                <p className="vds-tariffs__p">Количество IP: Безлимит</p>
                                                <p className="vds-tariffs__p">Трафик: Безлимит</p>
                                                <p className="vds-tariffs__p">Скорость: до 20 Мбит</p>
                                                <p className="vds-tariffs__p">Ожидание смены IP: </p>

                                                <div className="vds-tariffs__block_checkbox">
                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="checkbox"
                                                                name="checkboxVdsProProxyLimit"
                                                                className="form-check-input"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.checkboxVdsProProxyLimit}/>
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">20-30 сек</p>
                                                        </label>
                                                    </div>
                                                    <div className="form-check registration-page__form-check_margin form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="checkbox"
                                                                name="checkboxVdsProProxyUnlimit"
                                                                className="form-check-input"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.checkboxVdsProProxyUnlimit}/>
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                {(touched.checkboxVdsProProxyLimit || touched.checkboxVdsProProxyUnlimit) && errors.checkboxVdsProProxy && <div className="input-feedback">{errors.checkboxVdsProProxy}</div>}

                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="">

                                            <p className="">Геолокация:</p>
                                            <div className="vds-tariffs__block_checkbox">
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsProRU"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsProRU}/>
                                                        <p className="vds-tariffs__checkbox">RU</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsProUA"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsProUA}/>
                                                        <p className="vds-tariffs__checkbox">UA</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            name="checkboxVdsProUK"
                                                            className="form-check-input"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.checkboxVdsProUK}/>
                                                        <p className="vds-tariffs__checkbox">UK</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.checkboxVdsProRU || touched.checkboxVdsProUA || touched.checkboxVdsProUK) && errors.checkboxVdsProGeo && <div className="input-feedback">{errors.checkboxVdsProGeo}</div>}

                                            <div className="form-group">
                                                <label className="" htmlFor="inlineFormCustomSelect">Выберите количество VDS:</label>
                                                <select
                                                    name="selectVdsProVds"
                                                    className="form-control "
                                                    id="exampleFormControlSelect1"
                                                    defaultValue = "2 VDS"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="1 VDS">1 VDS</option>
                                                    <option selected value="2 VDS">2 VDS</option>
                                                    <option value="3 VDS">3 VDS</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="" htmlFor="inlineFormCustomSelect">Выберите количество сборок:</label>
                                                <select
                                                    name="selectVdsProBuild"
                                                    className="form-control "
                                                    id="exampleFormControlSelect1"
                                                    defaultValue = "7 сборок"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="1 сборка">1 сборка</option>
                                                    <option selected value="7 сборок">7 сборок</option>
                                                    <option value="30 сборок">30 сборок</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="" htmlFor="inlineFormCustomSelect">Выберите количество дней:</label>
                                                <select
                                                    name="selectVdsProDay"
                                                    className="form-control "
                                                    id="exampleFormControlSelect1"
                                                    defaultValue = "30 дней"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}>
                                                    <option value="1 день">1 день</option>
                                                    <option value="7 дней">7 дней</option>
                                                    <option selected value="30 дней">30 дней</option>
                                                </select>
                                            </div>
                                            <div className="text-center vds-tariffs__btn_pro">
                                                {buttonPro}
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                        <div className="col-3">
                            <div className="vds-tariffs__text_block">
                                <p>250 руб за каждый день</p>
                                <p>Экономия 30%</p>
                                <p>Итого: {values.payment} руб</p>
                            </div>
                            <div className="">
                                <button
                                    name="selectTariff"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.selectTariff = true}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary text-center">Оплатить</button>
                            </div>
                            {touched.selectTariff && errors.selectTariff && <div className="input-feedback">{errors.selectTariff}</div>}
                        </div>
                    </div>

                </form>
            </div>
        );

        const Form = withFormik({
            mapPropsToValues: props => ({

                service: "VDS",
                tariffs: false,

                //геолокация

                checkboxVdsClassicRU: false,
                checkboxVdsClassicUA: false,
                checkboxVdsClassicUK: false,
                checkboxVdsProRU: false,
                checkboxVdsProUA: false,
                checkboxVdsProUK: false,

                //время смены сборки

                checkboxVdsClassicTimeUnlimit: false,
                checkboxVdsClassicTimeLimit: false,

                checkboxVdsProTimeUnlimit: false,
                checkboxVdsProTimeLimit: false,

                //время смены IP

                checkboxVdsProProxyLimit: false,
                checkboxVdsProProxyUnlimit: false,
                checkboxVdsProProxyNull: false,

                //количество VDS

                selectVdsClassicVdsId: props.selectVdsClassicVdsId,
                selectVdsProVds: false,

                //количество сборок

                selectVdsClassicBuild: false,
                selectVdsProBuild: false,

                //количество дней

                selectVdsClassicDay : false,
                selectVdsProDay: false,

                //сумма

                payment: "1000",

                //флажки

                selectTariff: false,
                userLog: false,
            }),
            validate: (values) => {
                const errors = {};
                if (!(values.checkboxVdsProRU || values.checkboxVdsProUA || values.checkboxVdsProUK) && this.state.isSelectPro) {
                    errors.checkboxVdsProGeo = 'Выберите геолокацию.';
                } if (!(values.checkboxVdsProProxyUnlimit || values.checkboxVdsProProxyLimit) && this.state.isSelectPro) {
                    errors.checkboxVdsProProxy = 'Выберите время смены IP.';
                } if (!(values.checkboxVdsClassicRU || values.checkboxVdsClassicUA || values.checkboxVdsClassicUK) && this.state.isSelectClassic) {
                    errors.checkboxVdsClassicGeo = 'Выберите геолокацию.';
                } if (values.selectTariff && !this.state.isSelectPro && !this.state.isSelectClassic) {
                    errors.selectTariff = "Выберите тариф.";
                } if (this.state.isSelectPro) {
                    values.tariffs = 'PRO'
                } if (this.state.isSelectClassic) {
                    values.tariffs = 'CLASSIC'
                } if (!(values.checkboxVdsClassicTimeUnlimit || values.checkboxVdsClassicTimeLimit) && this.state.isSelectClassic) {
                    errors.checkboxVdsClassicTime = 'Выберите время пересборки.';
                } if (!(values.checkboxVdsProTimeUnlimit || values.checkboxVdsProTimeLimit) && this.state.isSelectPro) {
                    errors.checkboxVdsProTime = 'Выберите время пересборки.';
                } if (userLog) {
                    values.userLog = true;
                } if (!values.selectVdsClassicVds && this.state.isSelectClassic) {
                    values.selectVdsClassicVds = '2 VDS'
                } if (!values.selectVdsClassicBuild && this.state.isSelectClassic) {
                    values.selectVdsClassicBuild = '7 сборок'
                } if (!values.selectVdsClassicDay && this.state.isSelectClassic) {
                    values.selectVdsClassicDay = '30 дней'
                } if (!values.selectVdsProVds && this.state.isSelectPro) {
                    values.selectVdsProVds = '2 VDS'
                } if (!values.selectVdsProBuild && this.state.isSelectPro) {
                    values.selectVdsProBuild = '7 сборок'
                } if (!values.selectVdsProDay && this.state.isSelectPro) {
                    values.selectVdsProDay = '30 дней'
                } if (values.checkboxVdsClassicRU) {
                    values.checkboxVdsClassicRU = 'RU'
                } if (values.checkboxVdsClassicUA) {
                    values.checkboxVdsClassicUA = 'UA'
                } if (values.checkboxVdsClassicUK) {
                    values.checkboxVdsClassicUK = 'UK'
                } if (values.checkboxVdsProRU) {
                    values.checkboxVdsProRU = 'RU'
                } if (values.checkboxVdsProUA) {
                    values.checkboxVdsProUA = 'UA'
                } if (values.checkboxVdsProUK) {
                    values.checkboxVdsProUK = 'UK'
                } if (values.checkboxVdsClassicTimeUnlimit) {
                    values.checkboxVdsClassicTimeUnlimit = 'Без ожидания'
                } if (values.checkboxVdsClassicTimeLimit) {
                    values.checkboxVdsClassicTimeLimit = '24 часа'
                } if (values.checkboxVdsProTimeUnlimit) {
                    values.checkboxVdsProTimeUnlimit = 'Без ожидания'
                } if (values.checkboxVdsProTimeLimit) {
                    values.checkboxVdsProTimeLimit = '24 часа'
                } if (values.checkboxVdsProProxyLimit) {
                    values.checkboxVdsProProxyLimit = '20-30 сек'
                } if (values.checkboxVdsProProxyUnlimit) {
                    values.checkboxVdsProProxyUnlimit = 'Без ожидания'
                } if (!(values.checkboxVdsProProxyLimit && values.checkboxVdsProProxyUnlimit)) {
                    values.checkboxVdsProProxyNull = 'Не выбран'
                }

                /*валидация итоговой суммы*/

                if (!(this.state.isSelectClassic && this.state.isSelectPro)) {
                    values.payment = '0'
                }


                console.log(errors);
                return errors;
            },
            handleSubmit: (values, { setSubmitting }) => {
                const payload = {
                    ...values,
                    topics: values.topics.map(t => t.value),
                };
                this.props.savingTariffs(payload);
            },
        })(InnerForm);

        return (
            <div>
                <Form />
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
    console.log('---', 'connect')
    return {
        userLog: state.user.accountUserInfo
    }
},{savingTariffs})(VdsTariffs))