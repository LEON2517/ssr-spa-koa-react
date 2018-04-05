import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectVdsClassic extends React.Component {

    render() {
        return (
            <div>
                <label>Количество VDS:</label>
                <Select
                    name="vdsClassic"
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
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('vdsClassic', value);
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur('vdsClassic', true);
    };

}

const options = [
    { value: '1 VDS', label: '1 VDS' },
    { value: '2 VDS', label: '2 VDS' },
    { value: '3 VDS', label: '3 VDS' }
];

export default SelectVdsClassic