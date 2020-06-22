import React, { Component } from 'react';

export interface IDateIntervalProps {
    
}

class DateInterval extends Component<IDateIntervalProps> {
    render() {
        return (
            <div className={'date-interval-container'}>
                <input type={'date'}></input>
                <p>até</p>
                <input type={'date'}></input>
            </div>
        );
    }
}

export default  DateInterval;