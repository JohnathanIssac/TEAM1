import React from "react";
import Nav from '../Nav';
import search from '../assets/search.png';

function Search({ onClick, onChange }) {
  return (
    <div className="Search" style={{backgroundColor: "black"}}>
        <Nav />
            <div className="SearchTitle">
                <p>What do you want to find?</p>
            </div>
                <div className="input-group">  
                <input type="text"
                placeholder="Search Titles of Movies, Sports, etc.," 
                />
                    <button type="button" id="search_btn" onClick={onClick}>
                        <img src={search} width="30" height="30" ></img>
                    </button>
                </div>
            </div>
        );
}

export default Search;