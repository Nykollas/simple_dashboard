import React, { Component } from 'react';
import { Properties } from 'csstype';

const BarStyle = (value: number): Properties => {

    return {
        height: `${value}px`,
    }
}

export interface IGridColumnProps {
    womanValue: number | undefined,
    manValue: number | undefined
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
        return (
            
                <div className={"column"}>
                    <div className={'grid'}>
                    </div>
                    <div className={"grid"}>
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

export default GridColumn;