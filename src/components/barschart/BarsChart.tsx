import React, { Component } from 'react';
import GridColumn from './GridColumn';
import './style.css';
export interface IBarsChartProps {

}

class BarsChart extends Component<IBarsChartProps> {
    render() {
        return (
            <div className={'bars-chart-container'}>
                <div className={"bars-chart-header"}>

                </div>
                <div className={"bars-chart"}>
                    <div className={'row'}>
                        <div className={"y-ticks-darker"}>
                            <div className={'tick'}>

                            </div>
                            <div className={'tick'}>

                            </div>
                        </div>
                        <div className={"y-ticks"}>
                            <div className={'tick'}>

                            </div>
                            <div className={'tick'}>

                            </div>
                        </div>
                        <div className={'grids'}>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                            <GridColumn></GridColumn>
                        </div>
                    </div>
                </div>
                <div className={"x-ticks"}>
                    <label>{"< 18"}</label>
                    <label>{"18-21"}</label>
                </div>
            </div>
        );
    }
}

export default BarsChart;