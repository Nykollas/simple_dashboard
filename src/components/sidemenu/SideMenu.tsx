import React, { Component } from 'react';
import SideMenuOption from './SideMenuOption';
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

export interface SideMenuProps { darkMode: boolean };
export default class SideMenu extends Component<SideMenuProps, {}> {
    render() {
        return <div className={'sidemenu-container'}>
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