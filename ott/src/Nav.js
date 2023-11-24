import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import homeIcon from './assets/strip.png';
import searchIcon from './assets/search.png';
import { useState } from "react";
import infoIcon from './assets/mypageicon.png';
import './Nav.css';

function Nav() {

    return (
        <div className="Nav">
            <nav class="navbar navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>
                <img src={homeIcon} className="iconPosition" width="30" height="30"></img></Link>
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categories</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Series</a></li>
                            <li><a class="dropdown-item" href="#">Movies</a></li>
                            <li><a class="dropdown-item" href="#">Documetary</a></li>
                            <li><a class="dropdown-item" href="#">Entertainment</a></li>
                            <li><a class="dropdown-item" href="#">Saving contents</a></li>
                        </ul>
                        </li>
                    </ul>
                    <ul className="nav justify-content-right">
                    <li className="nav-item">
                        <form className="form-inline">
                            <input className="searching" type="search" placeholder="Search" aria-label="Search" style={{display: "none"}}/>    
                                <Link className="nav-link" to={'/Search'}>
                                    <img src={searchIcon} width="30" height="30"></img>
                                </Link>
                        </form>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mypageIcon" to={'/Info'}>
                            <img src={infoIcon} width="30" height="30"></img>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>


    )
}

export default Nav;