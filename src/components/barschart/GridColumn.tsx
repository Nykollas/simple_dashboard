import React, { Component } from 'react';
import { Properties } from 'csstype';
import { connect } from 'react-redux';

const BarStyle = (value: number): Properties => {

    return {
        height: `${value}px`,
    }
}

export interface IGridColumnProps {
    womanValue: number | undefined,
    manValue: number | undefined,
    dark: boolean,
    style:Properties
}

class GridColumn extends Component<IGridColumnProps> {

    state = { womanValue: 0, manValue: 0 }

    componentDidMount = () => {
        const { manValue, womanValue } = this.props;
        this.setState({
            manValue,
            womanValue
        })
    }

    render = () => {
        const {
            womanValue,
            manValue
        } = this.state;

        const { dark, style } = this.props;

        const theme = dark ? {
            backgroundColor: 'var(--dark)',
            color: 'var(--font-color-dark)',
            border: '1px solid var(--dark-border)',
            borderLeft: 'solid 3px var(--dark-border)',
            borderTop: 'solid 3px var(--dark-border)',
            borderRight: 'solid 3px var(--dark-border)',
            borderBottom: 'solid 3px var(--dark-border)'
        } :
            {
                backgroundColor: 'var(--light)',
                color: 'var(--font-color-light)',
                border: '1px solid var(--light-border)',
                borderLeft: 'solid 3px var(--light-border)',
                borderTop: 'solid 3px var(--light-border)',
                borderRight: 'solid 3px var(--light-border)',
                borderBottom: 'solid 3px var(--light-border)'
            }

        const {
            borderLeft,
            borderBottom,
            borderTop
        } = theme;


        return (
            
            <div className={"column"}>
                <div className={'grid'} style={{borderTop, borderLeft,  ...style}}>
                </div>
                <div className={"grid"} style={{borderTop, borderBottom, borderLeft, ...style}}>
                </div>
                <div className={"bars-container"}>
                    <div className={"bars"}>
                        <div className={"bar-women"} style={BarStyle(womanValue ? womanValue : 0)}>
                        </div>
                        <div className={"bar-man"} style={BarStyle(manValue ? manValue : 0)}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { dark: state.dark }
}

export default connect(mapStateToProps, null)(GridColumn);