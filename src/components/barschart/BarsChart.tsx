import React, { Component } from 'react';
import GridColumn from './GridColumn';
import { connect } from 'react-redux';
import './style.css';

export interface IBarsChartProps {

    dark: boolean

}

class BarsChart extends Component<IBarsChartProps> {
    render() {
        const { dark } = this.props;
        const theme = dark ? {
            backgroundColor: 'var(--dark)',
            color: 'var(--font-color-dark)',
            border: '1px solid var(--dark-border)',
            borderLeft: 'solid 3px  var(--dark-border)',
            borderTop: 'solid 3px  var(--dark-border)',
            borderRight: 'solid 3px  var(--dark-border)',
            borderBottom: 'solid 3px  var(--dark-border)'
        } :
            {
                backgroundColor: 'var(--light)',
                color: ' var(--font-color-light)',
                border: '1px solid var(--light-border)',
                borderLeft: 'solid 3px  var(--light-border)',
                borderTop: 'solid 3px var(--light-border)',
                borderRight: 'solid 3px  var(--light-border)',
                borderBottom: 'solid 3px var(--light-border)'
            }

        const {
            backgroundColor,
            color,
            border,
            borderRight,
        } = theme;
        return (
            <div className={'bars-chart-container'} style={{ backgroundColor, border }}>
                <div className={"bars-chart-header"}>
                    <p style={{ color }}>
                        Gender/Age
                    </p>
                    <div className={"bars-legend"}>
                        <div className="box">
                        </div>
                        <label style={{color}}>women</label>
                        <div className="box">
                        </div>
                        <label style={{color}}>men</label>
                    </div>
                </div>
                <div className={"bars-chart"}>
                    <div className={'row'} style={{ alignItems: 'flex-end' }}>
                        <div className={"y-ticks-label"}>
                            <div className={'tick-label'}>
                                <p style = {{color}}> 40%</p>
                            </div>
                            <div className={'tick-label'}>
                                <p  style = {{color}}>20%</p>
                                <p  style = {{color}}>0%</p>
                            </div>
                        </div>
                        <div className={"y-ticks"}>
                            <div className={'tick'} style={{ 
                                        borderTop: dark ? "3px solid var(--font-color-dark)" : "3px solid var(--font-color-light)",
                             }}>
                            </div>
                            <div className={'tick'} style={{
                                borderBottom: dark ? "3px solid var(--font-color-dark)" : "3px solid var(--font-color-light)",
                                borderTop: dark ? "3px solid var(--font-color-dark)" : "3px solid var(--font-color-light)",
                            }}>
                            </div>
                        </div>
                        <div className={"y-ticks-darker"}>
                            <div className={'tick'} style={{ borderTop: dark ? "3px solid var(--dark-border)" : "3px solid var(--light-border)" }}>
                            </div>
                            <div className={'tick'} style={{
                                borderBottom: dark ? "3px solid var(--dark-border)" : "3px solid var(--light-border)",
                                borderTop: dark ? "3px solid var(--dark-border)" : "3px solid var(--light-border)"
                            }}>
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
                            <GridColumn womanValue={12} manValue={90} style={{  borderRight }} ></GridColumn>
                        </div>
                    </div>
                </div>
                <div className={"x-ticks"}>
                    <label style={{ color }}>{"< 18"}</label>
                    <label style={{ color }}>{"18-21"}</label>
                    <label style={{ color }}>{"21-24"}</label>
                    <label style={{ color }}>{"24-27"}</label>
                    <label style={{ color }}>{"27-30"}</label>
                    <label style={{ color }}>{"30-35"}</label>
                    <label style={{ color }}>{"35-40"}</label>
                    <label style={{ color }}>{">40"}</label>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { dark: state.dark }
}

export default connect(mapStateToProps, null)(BarsChart);