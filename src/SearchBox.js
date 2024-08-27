import React from "react";


const SearchBox = ({searchfield, searchChange}) => {
      return (
        <div className="search-box">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="Search..."
            onChange={searchChange}
            /> 
        </div>
    );
}

export default SearchBox;