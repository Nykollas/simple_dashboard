import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CheckedBox, Box } from '../../assets/icons';

export interface ICheckOptionProps {
    label: string,
    handleCheckBox: () => void,
    checked: boolean,
    dark: boolean
}

class CheckOption extends Component<ICheckOptionProps> {

    render() {
        const {
            label,
            handleCheckBox,
            checked,
            dark } = this.props;

        const theme = dark ? {
            backgroundColor: 'var(--dark)',
            color: 'var(--font-color-dark)',
        } :
        {
            backgroundColor: 'var(--light)',
            color: ' var(--font-color-light)',
        }

        const {
            backgroundColor,
            color,
        } = theme;

        return (
            <div onClick={handleCheckBox} className={'check-option-container'}>
                {checked ? <CheckedBox></CheckedBox> : <Box />}
                <p style={{color}}>{label}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dark:state.dark
    }
}


export default connect(mapStateToProps, null)(CheckOption);