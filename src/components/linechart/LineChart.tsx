import React, { Component } from 'react';
import './style.css';
import  DateInterval from './DateInterval';
import CheckOption from './CheckOption';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
export interface ILineChartProps {
    
}

const { CanvasJSChart, CanvasJS} = CanvasJSReact;

class LineChart extends Component<ILineChartProps> {
    render() {

        const options = {
            animationEnabled: true,
            axisX:{
                lineColor:"#EFF3F9",
                gridColor:"#EFF3F9",
                tickColor:"#4F4F4F",
                gridThickness:2,
                tickThickness:2,
                tickLength:12,
                lineThickness:4
            },
            axisY:{
                lineColor:"#EFF3F9",
                tickColor:"#4F4F4F",
                gridColor:"#EFF3F9",
                gridThickness:2,
                tickThickness:2,
                tickLength:12,
                lineThickness:4
            },
            data: [{				
                      type: "spline",
                      markerColor:"#E786D7",
                      lineColor:"#7F7FD5",
                      dataPoints: [
                          { label: "Apple",  y: 10  },
                          { label: "Orange", y: 15  },
                          { label: "Banana", y: 25  },
                          { label: "Mango",  y: 30  },
                          { label: "Grape",  y: 28  }
                      ]
             }]
         }

        return (
            <div className={'line-chart-container'}>
                <div className={'line-chart-header'}>
                    <p>Audience Reach</p>
                    <DateInterval></DateInterval>
                    <CheckOption  label={"Total"}></CheckOption>
                    <CheckOption  label={"Follower"}></CheckOption>
                </div>
                <div className={'chart-container'}>
                <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
                </div>
            </div>
        );
    }
}

export  default LineChart ;