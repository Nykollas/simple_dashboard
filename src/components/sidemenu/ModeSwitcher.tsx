import React, { Component } from 'react';
import { Properties } from 'csstype';
import  { MoonIcon, CircleIcon } from '../../assets/icons';
import { connect } from 'react-redux';
import  {setMode} from '../../redux/actions';

const moonIconLight: Properties = {
    marginLeft: 'calc(100% - 20px)',
    marginRight: 0,
}

const moonIconDark: Properties = {
    marginRight: '100%',
    marginLeft: 0,
}

const switcherContainerBG:Properties = {
    backgroundColor:'#7F7FD5'
}

export interface IModelSwitcherProps {
    dark:boolean,
    setMode:(boolean)=> void
}

export interface IModelSwitcherState {
    dark: boolean
}

class ModeSwitcher extends Component<IModelSwitcherProps, IModelSwitcherState> {
    onChangeMode = () => {
        const { dark, setMode } = this.props;
        setMode(!dark);
    }
    render = () => {
        const { dark } = this.props;
        let modeStyle = dark ? { ...moonIconDark } : { ...moonIconLight }
        return <div className={"mode-switcher-container"} style = { !dark?switcherContainerBG:{}} >
                <div className={"switcher"} onClick={this.onChangeMode} style={modeStyle}>
                    { dark ? <MoonIcon></MoonIcon> : <CircleIcon></CircleIcon> }
                </div>
        </div>
    }
}

const mapDispatchToProps = {
    setMode
}

const mapStateToProps = (state) => {
    console.log("Estado lido " + state.dark);
    return {
        dark:state.dark
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitcher);