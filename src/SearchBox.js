import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
       <React.Fragment>
           <input className = 'pa3 ba b--green bg-lightest-blue'
            type = 'search' 
            placeholder = 'search friends'
            onChange={searchChange} /> 
       </React.Fragment>
        
    )
}

export default SearchBox;