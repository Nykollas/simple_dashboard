import React, { Component } from 'react';
import { DownArrow } from '../../assets/icons';
import { connect } from 'react-redux';
import './style.css';

export interface UserProfileProps {
    imgUrl:string,
    name:string,
    dark:boolean,
}

class UserProfile extends Component<UserProfileProps> {
    render() {
        const { imgUrl, name, dark} = this.props;

        const theme = dark ? {
            
            color: 'var(--font-color-dark)',
            
        } :
        {
            
            color: ' var(--font-color-light)',
            
        }
        const {
            color,
        } = theme;

        return (
            <div className={"user-profile-container"}>
                <p style={{color}}>{name}</p>
                <img src={imgUrl}/>
                <DownArrow></DownArrow>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dark:state.dark
    }
}

export default  connect(mapStateToProps, null)(UserProfile);