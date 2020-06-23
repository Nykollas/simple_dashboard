import React, { Component } from 'react';
import './style.css';
import DateInterval from './DateInterval';
import CheckOption from './CheckOption';
import CanvasJSReact from '../../assets/lib/canvasjs.react';

export interface ILineChartProps {

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
        const options = {
            animationEnabled: true,
            height:200,
            axisX: {
                lineColor: "#EFF3F9",
                gridColor: "#EFF3F9",
                tickColor: "#979797",
                labelFontColor: '#979797',
                gridThickness: 2,
                tickThickness: 2,
                tickLength: 12,
                lineThickness: 4,
            },
            axisY: {
                lineColor: "#EFF3F9",
                tickColor: "#979797",
                gridColor: "#EFF3F9",
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
            <div className={'line-chart-container'}>
                <div className={'line-chart-header'}>
                    <p>Audience Reach</p>
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
                    /* onRef = {ref => this.chart = ref} */
                    />
                </div>
            </div>
        );
    }
}

export default LineChart;