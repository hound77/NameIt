import React from 'react';
import './SearchBox.css';

const SearchBox =({onInputChage}) => {
    return(
        <div className="search-container">
            <input 
            onChange={(event)=> onInputChage(event.target.value)}
            placeholder="type keywords" 
            className="search-input"
            />

        </div>
    );

};

export default SearchBox