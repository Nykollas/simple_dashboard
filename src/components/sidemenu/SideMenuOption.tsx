import React, { Component } from 'react';
export interface SideMenuOptionProps {
    icon:React.ReactNode
}
class SideMenuOption extends Component<SideMenuOptionProps, {}> {
    render  = () => {
        const { icon } = this.props;
        return <div className="sidemenu-option">
                  {icon}
               </div>
    }
}
export default SideMenuOption;

