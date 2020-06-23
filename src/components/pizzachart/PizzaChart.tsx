import React, { Component } from 'react';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
import './style.css'

const { CanvasJSChart, CanvasJS } = CanvasJSReact;

export interface IPizzaChartProps {
    
}

class PizzaChart extends Component<IPizzaChartProps> {
    render() {

        const options = {
            
            width:336,
            animationEnabled: true,
            legend:{
                horizontalAlign:'right',
                verticalAlign:'center',
                fontSize:16,
                itemWidth:100,
                markerMargin:16,
            },            
            data: [{
                type: "pie",
                showInLegend:true,
                indexLabelLineDashType: "dash",
                indexLabelPlacement: "inside",
                indexLabel:"{y}%",
                indexLabelFontColor:'#FFF',
                indexLabelFontSize:16,
                indexLabelFontWeight:"bold",
                startAngle: 240,
                legendText:"{label}",
                dataPoints: [
                    {y: 60, label: "Desktop",color: "#7F7FD5"},
                    {y: 40, label: "Mobile", color:"#E786D7"},
                ],
                
                
            }]
        }

        return (
            <div className={'pizza-chart-container'}>
                    <div className={'pizza-chart-header'}>
                        <label>Reach by device</label>
                    </div>
                    
                        <CanvasJSChart options={options}/>
                    
            </div>
        );
    }
}

export default  PizzaChart;