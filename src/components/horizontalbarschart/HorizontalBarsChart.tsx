import React, { Component } from 'react';
import HorizontalBar from './HorizontalBar';
import './style.css';

export interface IHorizontalBarsChartProps {

}

class HorizontalBarsChart extends Component<IHorizontalBarsChartProps> {
    render = () => {
        return (
            <div className={'horizontal-bars-chart-container'}>
                <div className={"horizontal-bars-chart-header"}>
                    <p>Geo</p>
                </div>
                <div className={'row'}>
                    <HorizontalBar countryName={"Russia"}
                        percentValue={20}>
                    </HorizontalBar>
                    <HorizontalBar countryName={"Ukraine"}
                        percentValue={20}>
                    </HorizontalBar>
                    <HorizontalBar countryName={"Mongolia"}
                        percentValue={30}>
                    </HorizontalBar>
                </div>
                <div className={'row'}>
                    <HorizontalBar countryName={"China"}
                        percentValue={15}>
                    </HorizontalBar>
                    <HorizontalBar countryName={"USA"}
                        percentValue={7.25}>
                    </HorizontalBar>
                    <HorizontalBar countryName={"Other"}
                        percentValue={7.25}>
                    </HorizontalBar>
                </div>
                <div className={'row'}>
                    <HorizontalBar countryName={"China"}
                        percentValue={15}>
                    </HorizontalBar>
                    <HorizontalBar countryName={"USA"}
                        percentValue={7.25}>
                    </HorizontalBar>
                    <HorizontalBar countryName={"Other"}
                        percentValue={7.25}>
                    </HorizontalBar>
                </div>
            </div>
        );
    }
}


export default HorizontalBarsChart;