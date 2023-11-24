import React from "react";
import Nav from "../Nav";
import '../App.css';

function Search() {

    return (
        <div className="Search">
            <Nav />
                <div class="input-group flex-nowrap">
                    <form>
                    <button>Search</button>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </form>
                </div>
        </div>
    );
}

export default Search;