import React, { Component } from 'react';
import './style.css';
import DateInterval from './DateInterval';
import CheckOption from './CheckOption';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
import { connect } from 'react-redux';

export interface ILineChartProps {
    dark:boolean
}

export interface ILineChartState {
    total:boolean,
    followers:boolean,
}

const { CanvasJSChart, CanvasJS } = CanvasJSReact;

class LineChart extends Component<ILineChartProps, ILineChartState> {

    state = {
        total:false,
        followers:false,
    }

    setTotal = () => {
        this.setState({
            total:true,
            followers:false,
        })
    }
    
    setFollowers = () => {
        this.setState({
            total:false,
            followers:true,
        })
    }

    render() {

        const { total, followers } = this.state;
        const { dark } = this.props;

        const theme = dark ? {
            backgroundColor: 'var(--dark)',
            color: 'var(--font-color-dark)',
            border:'1px solid var(--dark-border)'
        } :
        {
            backgroundColor: 'var(--light)',
            color: ' var(--font-color-light)',
            border:'1px solid var(--light-border)'
        }
        const {
            backgroundColor,
            color,
            border
        } = theme;

        const options = {
            animationEnabled: true,
            height:200,
            backgroundColor:dark ? "#282C31" : "#FDFDFF",
            axisX: {
                lineColor:  dark ? "#4D4D4D" : "#EFF3F9",
                gridColor: dark ? "#4D4D4D" : "#EFF3F9",
                tickColor: dark ? "#979797" : "#C4C4C4",
                labelFontColor: '#979797',
                gridThickness: 2,
                tickThickness: 2,
                tickLength: 12,
                lineThickness: 4,
            },
            axisY: {
                lineColor:  dark ? "#4D4D4D" : "#EFF3F9",
                tickColor: dark ? "#979797" : "#C4C4C4",
                gridColor: dark ? "#4D4D4D" : "#EFF3F9",
                labelFontColor: '#979797',
                gridThickness: 2,
                tickThickness: 2,
                tickLength: 12,
                lineThickness: 4
            },
            data: [{
                type: "spline",
                markerColor: "#E786D7",
                lineColor: "#7F7FD5",

                dataPoints: [
                    { label: "31/01", y: 10 },
                    { label: "31/02", y: 15 },
                    { label: "31/03", y: 25 },
                    { label: "31/04", y: 30 },
                    { label: "31/05", y: 28 }
                ]
            }]
        }

        return (
            <div className={'line-chart-container'} style={{backgroundColor, border}}>
                <div className={'line-chart-header'}>
                    <p style={{color}}>Audience Reach</p>
                    <DateInterval></DateInterval>
                    <CheckOption 
                        handleCheckBox={this.setTotal}
                        label={"Total"}
                        checked={total}>
                    </CheckOption>
                    <CheckOption 
                        handleCheckBox={this.setFollowers}
                        label={"Follower"}
                        checked={followers}>
                    </CheckOption>
                </div>
                <div className={'chart-container'}>
                    <CanvasJSChart options={options}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dark:state.dark
    }
}
export default connect(mapStateToProps, null)(LineChart);