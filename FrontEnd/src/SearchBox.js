/**
 * Richard Li
 * Creates a searchbox 
 */
import React from 'react';

const SearchBox = (props) =>{//Creates a searchbox
    return(
        <input 
            type = 'search'
            className = 'search'
            placeholder = {"Enter ID Here"}
            onChange = {props.handleChange}
        />
    )
}
export default SearchBox