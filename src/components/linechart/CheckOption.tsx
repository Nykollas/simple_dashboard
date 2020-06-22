import React, { Component } from 'react';

import { CheckedBox, Box } from '../../assets/icons';

export interface ICheckOptionProps {
    label: string,
    handleCheckBox: () => void,
    checked: boolean
}

class CheckOption extends Component<ICheckOptionProps> {

    render() {
        const { label, handleCheckBox, checked } = this.props;
        return (
            <div onClick={handleCheckBox} className={'check-option-container'}>
                {checked ? <CheckedBox></CheckedBox> : <Box />}
                <p>{label}</p>
            </div>
        );
    }
}

export default CheckOption;