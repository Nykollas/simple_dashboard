import React, { Component } from 'react';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
import { connect } from 'react-redux';
import './style.css'

const { CanvasJSChart, CanvasJS } = CanvasJSReact;

export interface IPizzaChartProps {
        dark:boolean
}

class PizzaChart extends Component<IPizzaChartProps> {
    render() {
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
            
            width:300,
            animationEnabled: true,
            backgroundColor:dark ? "#282C31" : "#FFF",
            legend:{
                horizontalAlign:'right',
                verticalAlign:'center',
                fontSize:16,
                itemWidth:100,
                markerMargin:16,
                fontColor:color
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
                    {y: 60, label: "Desktop",color: "#25bb84"},
                    {y: 40, label: "Mobile", color:"#3471db"},
                ],
                
            }]
        }

        return (
            <div className={'pizza-chart-container'} style={{backgroundColor, border}}>
                    <div className={'pizza-chart-header'}>
                        <label style={{color}}>Reach by device</label>
                    </div>
                    
                        <CanvasJSChart options={options}/>
                    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dark:state.dark
    }
}

export default  connect(mapStateToProps, null)(PizzaChart);