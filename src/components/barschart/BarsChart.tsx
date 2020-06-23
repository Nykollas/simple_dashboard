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
                    <p>
                        Gender/Age
                    </p>
                    <div className={"bars-legend"}>
                        <div className="box">
                        </div>
                        <label>women</label>
                        <div className="box">
                        </div>
                        <label>men</label>
                    </div>
                </div>
                <div className={"bars-chart"}>
                    <div className={'row'} style={{ alignItems: 'flex-end' }}>
                        <div className={"y-ticks-label"}>
                            <div className={'tick-label'}>
                                <p> 40%</p>
                            </div>
                            <div className={'tick-label'}>
                                <p>20%</p>
                                <p>0%</p>
                            </div>
                        </div>
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
                            <GridColumn womanValue={50} manValue={50}></GridColumn>
                            <GridColumn womanValue={60} manValue={80}></GridColumn>
                            <GridColumn womanValue={10} manValue={30}></GridColumn>
                            <GridColumn womanValue={15} manValue={75}></GridColumn>
                            <GridColumn womanValue={36} manValue={80}></GridColumn>
                            <GridColumn womanValue={72} manValue={95}></GridColumn>
                            <GridColumn womanValue={24} manValue={80}></GridColumn>
                            <GridColumn womanValue={12} manValue={90}></GridColumn>
                        </div>
                    </div>
                </div>
                <div className={"x-ticks"}>
                    <label>{"< 18"}</label>
                    <label>{"18-21"}</label>
                    <label>{"21-24"}</label>
                    <label>{"24-27"}</label>
                    <label>{"27-30"}</label>
                    <label>{"30-35"}</label>
                    <label>{"35-40"}</label>
                    <label>{">40"}</label>
                </div>
            </div>
        );
    }
}

export default BarsChart;