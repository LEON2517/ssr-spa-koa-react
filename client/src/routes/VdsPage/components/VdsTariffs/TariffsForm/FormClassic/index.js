import React, { Component } from 'react';
import { withFormik } from 'formik';
import SelectVds from './ClassicSelect/SelectVds'
import SelectAssembly from './ClassicSelect/SelectAssembly'
import SelectDay from './ClassicSelect/SelectDay'

class FormClassic extends Component {

    render() {
        const { buttonClassic } = this.props

        const InnerForm = ({
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
                           }) => (
            <form onSubmit={handleSubmit}>
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
                                            name="timeAssemblyLimited"
                                            value={values.timeAssemblyLimited}
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
                                            name="timeAssemblyUnlimited"
                                            value={values.timeAssemblyUnlimited}
                                        />
                                        <p className="vds-tariffs__checkbox vds-tariffs__p">Без ожидания</p>
                                    </label>
                                </div>
                            </div>
                            {(touched.timeAssemblyLimited || touched.timeAssemblyUnlimited) && errors.timeAssembly && <div className="input-feedback">{errors.timeAssembly}</div>}
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
                                            name="geoRu"
                                            value={values.geoRu}
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
                                            name="geoUa"
                                            value={values.geoUa}
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
                                            name="geoUk"
                                            value={values.geoUk}
                                        />
                                        <p className="vds-tariffs__checkbox vds-tariffs__p">UK</p>
                                    </label>
                                </div>
                            </div>
                            {(touched.geoRu || touched.geoUa || touched.geoUk) && errors.geo && <div className="input-feedback">{errors.geo}</div>}

                            <div className="form-group">
                                <label className="t" htmlFor="inlineFormCustomSelect">
                                    Количество VDS:
                                </label>
                                <SelectVds
                                    value={values.vds}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.vds}
                                    touched={touched.vds}
                                />
                            </div>

                            <div className="form-group">
                                <label className="t" htmlFor="inlineFormCustomSelect">
                                    Выберите количество сборок:
                                </label>
                                <SelectAssembly
                                    value={values.assembly}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.assembly}
                                    touched={touched.assembly}
                                />
                            </div>

                            <div className="form-group">
                                <label className="" htmlFor="inlineFormCustomSelect">
                                    Выберите количество дней:
                                </label>
                                <SelectDay
                                    value={values.day}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    error={errors.day}
                                    touched={touched.day}
                                />
                            </div>

                            <div className="text-center vds-tariffs__btn_pro">
                                {buttonClassic}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );

        const Form = withFormik({
            mapPropsToValues: props => ({
                //время сборки
                timeAssemblyLimited: false,
                timeAssemblyUnlimited: false,

                //геолокация
                geoRu: false,
                geoUa: false,
                geoUk: false,

                //селекты
                vds: {},
                assembly: {},
                day: {}
            }),
            validate: (values) => {
                console.log(values);
                const errors = {};
                if (!(values.timeAssemblyLimited || values.timeAssemblyUnlimited) && this.state.isSelectClassic) {
                    errors.timeAssembly = 'Выберите время сборки.';
                } if (!(values.geoRu || values.geoUa || values.geoUk) && this.state.isSelectClassic) {
                    errors.geo = 'Выберите геопозицию.';
                }

                console.log(errors);
                return errors;
            },
            handleSubmit: (values, {setSubmitting}) => {
                const payload = {
                    ...values,
                    vds: values.vds.map(v => v.value),
                    assembly: values.assembly.map(a => a.value),
                    day: values.day.map(d => d.value),
                };
                this.props.savingTariffs(payload);
            },
        })(InnerForm);

        return (
            <div>
                <Form/>
            </div>
        )
    }
}

export default FormClassic