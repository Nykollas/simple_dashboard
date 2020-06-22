import React, { Component } from 'react';

export interface ICheckOptionProps {
    label:string
}

export interface IState {
    checked:boolean
}

class CheckOption extends Component<ICheckOptionProps, IState> {

    state = {
        checked:false
    }

    handleCheckBox = () => {
        this.setState(previousState=>{
            return {
                checked:!previousState.checked,
            }
        })
    }

    render() {
        const { label } = this.props;
        const { checked } = this.state;
        return (
            <div className={'check-option-container'}>
                <div className={ checked ? 'checked' : 'not-checked' }></div>
                <p>{label}</p>
            </div>
        );
    }
}

export default  CheckOption;