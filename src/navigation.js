// src/NavBar.js
import React, { useState } from 'react';
import './navigation.css'; // Import CSS for styling

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search submitted:', searchTerm);
        // Add logic to handle search submission here
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <form className="navbar-search" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default NavBar;