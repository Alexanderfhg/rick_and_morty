import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
// import styles from './Nav.modules.css'

export default function Nav (props) {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <br />
            <NavLink to="/about">About</NavLink>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}