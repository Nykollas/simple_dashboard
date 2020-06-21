import React, { Component } from 'react';
import { DownArrow } from '../../assets/icons';
import './style.css';

export interface UserProfileProps {
    imgUrl:string
    name:string
}

class UserProfile extends Component<UserProfileProps> {
    render() {
        const { imgUrl, name} = this.props;
        return (
            <div className={"user-profile-container"}>
                <p>{name}</p>
                <img src={imgUrl}/>
                <DownArrow></DownArrow>
            </div>
        );
    }
}

export default  UserProfile;