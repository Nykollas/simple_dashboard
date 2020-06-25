import React, { Component } from 'react';
import { connect } from 'react-redux';

export interface IDateIntervalProps {
        dark:boolean,
}

class DateInterval extends Component<IDateIntervalProps> {
    render() {

        const { dark } = this.props;

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
            <div className={'date-interval-container'} style={{backgroundColor}}>
                <input style={{color, backgroundColor}} type={'date'}></input>
                <p style={{color}}>até</p>
                <input style={{color, backgroundColor}} type={'date'}></input>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dark:state.dark
    }
}

export default  connect(mapStateToProps,null)(DateInterval);