import React, { Component } from 'react';
import { withFormik } from 'formik';
import SelectVdsClassic from './FormSelect/SelectVdsClassic'
import SelectAssemblyClassic from './FormSelect/SelectAssemblyClassic'
import SelectDayClassic from './FormSelect/SelectDayClassic'
import SelectVdsPro from './FormSelect/SelectVdsPro'
import SelectAssemblyPro from './FormSelect/SelectAssemblyPro'
import SelectDayPro from './FormSelect/SelectDayPro'

import {connect} from 'react-redux'
import {savingTariffs} from '../../../../../../actions/index'

/*const buttonPro = isSelectPro ? <button type="button" className="btn btn-primary text-center" onClick = {this.handleSelectPro}>Выбрано</button>
    : <button type="button" className="btn btn-secondary text-center" onClick = {this.handleSelectPro}>Выбрать</button>;

const buttonClassic = isSelectClassic ? <button type="button" className="btn btn-primary text-center" onClick = {this.handleSelectClassic}>Выбрано</button>
    : <button type="button" className="btn btn-secondary text-center" onClick = {this.handleSelectClassic}>Выбрать</button>;*/

class InnerForm extends Component {

    state = {
        sum: 100
    }

    handleChangeSum = () => {
        console.log(this)
        this.setState({
            sum: this.state.sum + 100
        })
    }


    render() {
        const {
            values,
            touched,
            dirty,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
            handleSelectPro,
            handleSelectClassic,
            isSelectPro,
            isSelectClassic
        } = this.props

        const buttonPro = isSelectPro ? <button type="button" className="btn btn-primary text-center" onClick = {handleSelectPro}>Выбрано</button>
            : <button type="button" className="btn btn-secondary text-center" onClick = {handleSelectPro}>Выбрать</button>;

        const buttonClassic = isSelectClassic ? <button type="button" className="btn btn-primary text-center" onClick = {handleSelectClassic}>Выбрано</button>
            : <button type="button" className="btn btn-secondary text-center" onClick = {handleSelectClassic}>Выбрать</button>;


        return(
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
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="timeAssemblyLimitedClassic"
                                                            value={values.timeAssemblyLimitedClassic}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">24 часа</p>
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="timeAssemblyUnlimitedClassic"
                                                            value={values.timeAssemblyUnlimitedClassic}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.timeAssemblyLimitedClassic || touched.timeAssemblyUnlimitedClassic) && errors.timeAssemblyErrClassic && <div className="input-feedback">{errors.timeAssemblyErrClassic}</div>}
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
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="geoRuClassic"
                                                            value={values.geoRuClassic}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">RU</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="geoUaClassic"
                                                            value={values.geoUaClassic}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UA</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="geoUkClassic"
                                                            value={values.geoUkClassic}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UK</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.geoRuClassic || touched.geoUaClassic || touched.geoUkClassic) && errors.geoErrClassic && <div className="input-feedback">{errors.geoErrClassic}</div>}

                                            <div className="form-group">
                                                <SelectVdsClassic
                                                    value={values.vdsClassic}
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                    error={errors.vdsClassic}
                                                    touched={touched.vdsClassic}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <SelectAssemblyClassic
                                                    value={values.assemblyClassic}
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                    error={errors.assemblyClassic}
                                                    touched={touched.assemblyClassic}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <SelectDayClassic
                                                    value={values.dayClassic}
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                    error={errors.dayClassic}
                                                    touched={touched.dayClassic}
                                                />
                                            </div>

                                            <div className="text-center vds-tariffs__btn_pro">

                                                {buttonClassic}

                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                {/*PRO*/}

                                <table className="table table-bordered vds-tariffs__table table-curved-pro">
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
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="timeAssemblyLimitedPro"
                                                            value={values.timeAssemblyLimitedPro}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">24 часа</p>
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="timeAssemblyUnlimitedPro"
                                                            value={values.timeAssemblyUnlimitedPro}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.timeAssemblyLimitedPro || touched.timeAssemblyUnlimitedPro) && errors.timeAssemblyErrPro && <div className="input-feedback">{errors.timeAssemblyErrPro}</div>}
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
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                name="timeIpLimitedPro"
                                                                value={values.timeIpLimitedPro}
                                                            />
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">20-30 сек</p>
                                                        </label>
                                                    </div>
                                                    <div className="form-check registration-page__form-check_margin form-check-inline">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="checkbox"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                name="timeIpUnlimitedPro"
                                                                value={values.timeIpUnlimitedPro}
                                                            />
                                                            <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                {(touched.timeIpLimitedPro || touched.timeIpUnlimitedPro) && errors.timeIpErrPro && <div className="input-feedback">{errors.timeIpErrPro}</div>}
                                            </div>
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
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="geoRuPro"
                                                            value={values.geoRuPro}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">RU</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="geoUaPro"
                                                            value={values.geoUaPro}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UA</p>
                                                    </label>
                                                </div>
                                                <div className="form-check registration-page__form-check_margin form-check-inline">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="geoUkPro"
                                                            value={values.geoUkPro}
                                                        />
                                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UK</p>
                                                    </label>
                                                </div>
                                            </div>
                                            {(touched.geoRuPro || touched.geoUaPro || touched.geoUkPro) && errors.geoErrPro && <div className="input-feedback">{errors.geoErrPro}</div>}

                                            <div className="form-group">
                                                <SelectVdsPro
                                                    value={values.vdsPro}
                                                    onChange={setFieldValue}
                                                    onChangeSum = {this.handleChangeSum}
                                                    onBlur={setFieldTouched}
                                                    error={errors.vdsPro}
                                                    touched={touched.vdsPro}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <SelectAssemblyPro
                                                    value={values.assemblyPro}
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                    error={errors.assemblyPro}
                                                    touched={touched.assemblyPro}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <SelectDayPro
                                                    value={values.dayPro}
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                    error={errors.dayPro}
                                                    touched={touched.dayPro}
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
                                <p>Итого: {values.payment = this.state.sum} руб</p>
                            </div>
                            <div className="">
                                <button
                                    name="selectTariff"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary text-center">Оплатить</button>
                            </div>

                            {errors.selectTariff && <div className="input-feedback">{errors.selectTariff}</div>}

                        </div>
                    </div>
                </form>
            </div>

        )
    }
}



const Form = withFormik({
    mapPropsToValues: props => ({
        handleSelectPro: props.handleSelectPro,
        handleSelectClassic: props.handleSelectClassic,
        //CLASSIC
        //время сборки
        timeAssemblyLimitedClassic: false,
        timeAssemblyUnlimitedClassic: false,

        //геолокация
        geoRuClassic: false,
        geoUaClassic: false,
        geoUkClassic: false,

        //селекты
        vdsClassic: {},
        assemblyClassic: {},
        dayClassic: {},


        //PRO
        //время сборки
        timeAssemblyLimitedPro: false,
        timeAssemblyUnlimitedPro: false,

        //геолокация
        geoRuPro: false,
        geoUaPro: false,
        geoUkPro: false,

        //IP
        timeIpLimitedPro: false,
        timeIpUnlimitedPro: false,

        //селекты
        vdsPro: {},
        assemblyPro: {},
        dayPro: {},


        //флажки
        userLog: false,
        payment: 100

    }),
    validate: (values, props) => {
        const errors = {};
        const {isSelectPro, isSelectClassic} = props

        //валидация CLASSIC
        // время сборки
        if (!(values.timeAssemblyLimitedClassic || values.timeAssemblyUnlimitedClassic) && isSelectClassic) {
            errors.timeAssemblyErrClassic = 'Выберите время сборки.';
        }
        //геолокация
        if (!(values.geoRuClassic || values.geoUaClassic || values.geoUkClassic) && isSelectClassic) {
            errors.geoErrClassic = 'Выберите геопозицию.';
        }

        //валидация PRO
        // время сборки
        if (!(values.timeAssemblyLimitedPro || values.timeAssemblyUnlimitedPro) && isSelectPro) {
            errors.timeAssemblyErrPro = 'Выберите время сборки.';
        }
        //геолокация
        if (!(values.geoRuPro || values.geoUaPro || values.geoUkPro) && isSelectPro) {
            errors.geoErrPro = 'Выберите геопозицию.';
        }
        //IP
        if (!(values.timeIpLimitedPro || values.timeIpUnlimitedPro) && isSelectPro) {
            errors.timeIpErrPro = 'Выберите время смены IP.';
        }

        //проверка выбран/не выбран тариф перед субмитом
        if (!isSelectPro && !isSelectClassic) {
            errors.selectTariff = 'Выберите тариф.';
        }

        //валидация итоговой суммы
        if (!isSelectPro && !isSelectClassic) {
            values.payment = '600';
        }

        //редирект на счет/регистрацию
        /*        if (userLog) {
                    values.userLog = true;
                }*/

        return errors;
    },
    handleSubmit: (values) => {
        this.props.savingTariffs(values);
    },
})(InnerForm);