import React from "react";


function SearchHeader({search}) {
    const handleSearch = (event)=>{
        event.preventDefault();
        search('Mehmet');

    } 
    return <div
    className="searchDiv"> 
        <form onSubmit={handleSearch}>
            <label>Search Engine </label>
                <input></input></form> </div>;
}

export default SearchHeader;