import React, { Component } from 'react';

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
            </div>
        );
    }
}

export { UserProfile };