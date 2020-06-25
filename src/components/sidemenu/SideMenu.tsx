import React, { Component } from 'react';
import SideMenuOption from './SideMenuOption';
import { connect } from 'react-redux';
import { 
        Logo,
        Home,
        Jornal,
        People,
        Message,
        Play,
        Graph,
        Engine
     } from "../../assets/icons";
import "./styles.css";
import ModeSwitcher from './ModeSwitcher';

export interface SideMenuProps { dark: boolean };
class SideMenu extends Component<SideMenuProps, {}> {
    render() {

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
        return <div className={'sidemenu-container'} style={{backgroundColor, border}}>
                    <div className={"sidemenu-icon"}>
                    <Logo></Logo>
                    </div>
                    <SideMenuOption icon={<Home></Home>}></SideMenuOption>
                    <SideMenuOption icon={<Jornal></Jornal>}></SideMenuOption>
                    <SideMenuOption icon={<People></People>}></SideMenuOption>
                    <SideMenuOption icon={<Message></Message>}></SideMenuOption>
                    <SideMenuOption icon={<Play></Play>}></SideMenuOption>
                    <SideMenuOption icon={<Graph></Graph>}></SideMenuOption>
                    <SideMenuOption icon={<Engine></Engine>}></SideMenuOption>
                    <ModeSwitcher></ModeSwitcher>
                </div>
    }
}

const mapStateToProps = (state) => {
    return {
        dark:state.dark,
    }
}

export default connect(mapStateToProps, null)(SideMenu);