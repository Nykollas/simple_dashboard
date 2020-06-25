import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { SearchIcon } from '../../assets/icons';


export interface SearchInputProps {
    dark:boolean    
};

class SearchInput extends Component<SearchInputProps, {}>{

    state = {
        text:null
    }

    handleText = (e:any) => {
        this.setState({
            text:e.target.value
        });
    }

    render  = () => {

        const { dark } = this.props;

        const theme = dark ? {
            backgroundColor: 'var(--dark-bg)',
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

        return(
            <div className="search-input-container"  style={{backgroundColor, border}}>
                <SearchIcon></SearchIcon>
                <input placeholder="Search" type="text" style={{color, backgroundColor}} onChange={this.handleText}></input>
            </div>
        )
    }

}


const mapStateToProps  = (state) => {
    return {
        dark:state.dark,
    }
}

export default connect(mapStateToProps, null)(SearchInput);