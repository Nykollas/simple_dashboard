import React from 'react';

export interface IGridColumnProps {

}

const GridColumn: React.FC<IGridColumnProps> = ({ }) => {
    return (
        <div className={"column"}>
            <div className={'grid'}>

            </div>
            <div className={"grid"}>

            </div>
            <div className={"bars-container"}>
                <div className={"bars"}>
                    <div className={"bar-women"}>

                    </div>
                    <div className={"bar-man"}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridColumn;