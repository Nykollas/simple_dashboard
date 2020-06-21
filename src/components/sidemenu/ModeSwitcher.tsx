import React, { Component } from 'react';
import MoonIcon from '../../assets/icons/moon';

export default class ModeSwitcher extends Component<{}, {}> {
    render  = () => {
        return <div className={"mode-switcher-container"}>
            <div className={"switcher"}>
                <MoonIcon></MoonIcon>
            </div>
        </div>
    }
}