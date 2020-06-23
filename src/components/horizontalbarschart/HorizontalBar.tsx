import React, { Component } from 'react';

const barFilledStyle = (percentValue:number) => ({
    width:percentValue,

});

export interface IHorizontalBarProps {
    countryName:string,
    percentValue:number,
}

class HorizontalBar extends Component<IHorizontalBarProps> {

    state = {
        percentValue:0,
    }

    componentDidMount = () =>{

        const {
            percentValue 
        } = this.props;

        this.setState({
            percentValue
        })
    }

    render() {
        const { countryName } = this.props;
        const { percentValue } = this.state;
        return (
            <div className={"horizontal-bar"}>
                <div className={"horizontal-header"}>
                    <p>{countryName}</p>
                    <p>{percentValue}</p>
                </div>
                <div className={"bar-container"}>
                    <div className={"bar"} >
                        <div className={"bar-filled"} style={barFilledStyle(percentValue)}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HorizontalBar;