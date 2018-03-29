import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectDay extends React.Component {

    render() {
        return (
            <div>
                <label>Количество дней:</label>
                <Select
                    name="day"
                    options={options}
                    multi={false}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
            </div>
        );
    }

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.assembly
        this.props.onChange('day', value);
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.assembly
        this.props.onBlur('day', true);
    };

}

const options = [
    { value: '1 день', label: '1 день' },
    { value: '7 дней', label: '7 дней' },
    { value: '30 дней', label: '30 дней' }
];

export default SelectDay