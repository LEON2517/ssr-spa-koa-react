import React, { Component } from 'react';

import {Link, NavLink } from 'react-router-dom'
import { withFormik } from 'formik';
import {connect} from 'react-redux'
import {savingTariffs} from '../../../../actions'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Async } from 'react-select';


import './style.css'

class VdsTariffs extends Component {

    state = {
        selectedOption: '',
        isSelectPro: true,
        isSelectClassic: false
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    render() {
        const {isSelectPro, isSelectClassic, selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        const buttonPro = isSelectPro ? <button type="button" className="btn btn-primary text-center" onClick = {this.handleSelectPro}>Выбрано</button>
            : <button type="button" className="btn btn-secondary text-center" onClick = {this.handleSelectPro}>Выбрать</button>;

        const buttonClassic = isSelectClassic ? <button type="button" className="btn btn-primary text-center" onClick = {this.handleSelectClassic}>Выбрано</button>
        : <button type="button" className="btn btn-secondary text-center" onClick = {this.handleSelectClassic}>Выбрать</button>;

        const InnerForm = ({
                               values,
                               errors,
                               touched,
                               handleChange,
                               handleBlur,
                               handleSubmit,
                               isSubmitting,
                           }) => (
            <div className="container-fluid vds-tariffs__container">

                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col text-center">
                            <h2 className="vds-tariffs__h2">ТАРИФЫ</h2>
                        </div>
                    </div>

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
                                            {touched.checkboxVdsClassicRU && errors.checkboxVdsClassicRU && <div className="input-feedback">{errors.checkboxVdsClassicRU}</div>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="">

                                                <div className="form-group">
                                                    <label className="" htmlFor="inlineFormCustomSelect">Выберите количество дней:</label>
                                                    <select className="form-control " id="exampleFormControlSelect1" defaultValue = "7">
                                                        <option
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.inputVdsClassicDay = "1"}>1 день</option>
                                                        <option
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.inputVdsClassicDay = "7"}>7 дней</option>
                                                        <option
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.inputVdsClassicDay = "30"}>30 дней</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="t" htmlFor="inlineFormCustomSelect">Выберите количество VDS:</label>
                                                    <select className="form-control " id="exampleFormControlSelect1" defaultValue = "7">
                                                        <option
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.inputVdsClassicVds = "1"}>1 шт</option>
                                                        <option
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.inputVdsClassicVds = "7"}>7 шт</option>
                                                        <option
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.inputVdsClassicVds = "30"}>30 шт</option>
                                                    </select>
                                                </div>
                                                <div className="text-center">
                                                    {buttonClassic}
                                                </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>


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
                                            <p className="vds-tariffs__p">Геолокация:</p>

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
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">RU</p>
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
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">UA</p>
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
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">UK</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                {touched.checkboxVdsProRU && errors.checkboxVdsProRU && <div className="input-feedback">{errors.checkboxVdsProRU}</div>}
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
                                                    {touched.checkboxVdsProProxyLimit && errors.checkboxVdsProProxyLimit && <div className="input-feedback">{errors.checkboxVdsProProxyLimit}</div>}

                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="">

                                                <div className="form-group">
                                                    <label className="" htmlFor="inlineFormCustomSelect">Выберите количество дней:</label>
                                                    <Select
                                                        name="form-field-name"
                                                        value={values.selectVdsProDay = value}
                                                        onChange={this.handleChange}
                                                        options={[
                                                            { value: '1 день', label: '1 день' },
                                                            { value: '7 дней', label: '7 дней' },
                                                            { value: '30 дней', label: '30 дней' }
                                                        ]}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="inlineFormCustomSelect">Выберите количество VDS:</label>
                                                    <Select
                                                        name="form-field-name"
                                                        value={values.selectVdsProVds = value}
                                                        onChange={this.handleChange}
                                                        options={[
                                                            { value: '1 шт', label: '1 шт' },
                                                            { value: '7 шт', label: '7 шт' },
                                                            { value: '30 шт', label: '30 шт' }
                                                        ]}
                                                    />
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
                                <p>Итого: 5000 руб</p>
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
                inputVdsClassicDay : 7,
                inputVdsClassicVds: 7,

                selectVdsProDay: false,

                selectVdsProVds: false,

                selectTariff: false,
                checkboxVdsClassicRU: false,
                checkboxVdsClassicUA: false,
                checkboxVdsClassicUK: false,
                checkboxVdsProRU: false,
                checkboxVdsProUA: false,
                checkboxVdsProUK: false,
                checkboxVdsProProxyLimit: false,
                checkboxVdsProProxyUnlimit: false}),
            validate: (values) => {
                const errors = {};
                if (!(values.checkboxVdsProRU || values.checkboxVdsProUA || values.checkboxVdsProUK) && this.state.isSelectPro) {
                    errors.checkboxVdsProRU = 'Выберите геолокацию.';
                } if (!(values.checkboxVdsProProxyUnlimit || values.checkboxVdsProProxyLimit) && this.state.isSelectPro) {
                    errors.checkboxVdsProProxyLimit = 'Выберите время смены IP.';
                } if (!(values.checkboxVdsClassicRU || values.checkboxVdsClassicUA || values.checkboxVdsClassicUK) && this.state.isSelectClassic) {
                    errors.checkboxVdsClassicRU = 'Выберите геолокацию.';
                } if (values.selectTariff && !this.state.isSelectPro && !this.state.isSelectClassic) {
                    errors.selectTariff = "Выберите тариф.";
                } if (this.state.isSelectPro) {
                    values.tariffs = 'PRO'
                } if (this.state.isSelectClassic) {
                    values.tariffs = 'CLASSIC'
                }
                console.log(errors);
                return errors;
            },
            handleSubmit: (values) => {
                console.log(values);
                this.props.savingTariffs(values);
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

export default connect(null,{savingTariffs})(VdsTariffs)