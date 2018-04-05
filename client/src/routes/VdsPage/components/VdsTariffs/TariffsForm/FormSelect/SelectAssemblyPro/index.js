import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectAssemblyPro extends React.Component {

    render() {
        return (
            <div>
                <label>Количество сборок:</label>
                <Select
                    name="assemblyPro"
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
        this.props.onChange('assemblyPro', value);
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.assembly
        this.props.onBlur('assemblyPro', true);
    };

}

const options = [
    { value: '1 сборка', label: '1 сборка' },
    { value: '7 сборок', label: '7 сборок' },
    { value: '30 сборок', label: '30 сборок' }
];

export default SelectAssemblyPro