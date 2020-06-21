import React, { Component } from 'react';
import './style.css';


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
                <input type="text" onChange={this.handleText}></input>
            </div>
        )
    }

}