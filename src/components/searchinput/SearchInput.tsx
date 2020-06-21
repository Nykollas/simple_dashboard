import React, { Component } from 'react';
import './styles.css';
import UserProfile from '../userprofile';
import { SearchIcon } from '../../assets/icons';


export interface SearchInputProps {};

export default class SearchInput extends Component<SearchInputProps, {}>{

    state = {
        text:null
    }

    handleText = (e:any) => {
        this.setState({
            text:e.target.value
        });
    }

    render  = () => {
        return(
            <div className="search-input-container">
                <SearchIcon></SearchIcon>
                <input placeholder="Search" type="text" onChange={this.handleText}></input>
            </div>
        )
    }

}