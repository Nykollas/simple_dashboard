import React, { Component } from 'react';
import { connect } from 'react-redux';

const barFilledStyle = (percentValue:number) => ({
    width:percentValue,

});

export interface IHorizontalBarProps {
    countryName:string,
    percentValue:number,
    dark:boolean
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
        const { countryName, dark } = this.props;
        const { percentValue } = this.state;

        const theme = dark ? {
            color: 'var(--font-color-dark)',
            backgroundColor:'var(--dark-border)'
        } :
        {
            color: ' var(--font-color-light)',
            backgroundColor:'var(--light-border)'
        }

        const { color, backgroundColor } = theme;

        return (
            <div className={"horizontal-bar"}>
                <div className={"horizontal-header"}>
                    <p style={{color}}>{countryName}</p>
                    <p style={{color}}>{percentValue}</p>
                </div>
                <div className={"bar-container"}>
                    <div className={"bar"} style={{backgroundColor}} >
                        <div className={"bar-filled"} style={barFilledStyle(percentValue)}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { dark: state.dark }
}

export default  connect(mapStateToProps, null)(HorizontalBar); 