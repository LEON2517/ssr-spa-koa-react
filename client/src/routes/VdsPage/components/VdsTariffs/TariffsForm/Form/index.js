import React, { Component } from 'react';
import { withFormik } from 'formik';
import FormInner from '../FormInner'

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
})(FormInner);

export default Form