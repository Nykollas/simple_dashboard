import React, { Component } from 'react';
import HorizontalBar from './HorizontalBar';
import { connect } from 'react-redux';
import './style.css';

export interface IHorizontalBarsChartProps {

    dark:boolean

}

class HorizontalBarsChart extends Component<IHorizontalBarsChartProps> {
    render = () => {

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

        return (
            <div className={'horizontal-bars-chart-container'} style={{backgroundColor, border}}>
                <div className={"horizontal-bars-chart-header"}>
                    <p style={{color}}>Geo</p>
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

const mapStateToProps = (state) => {
    return {
        dark:state.dark
    }
}

export default  connect(mapStateToProps, null)(HorizontalBarsChart);