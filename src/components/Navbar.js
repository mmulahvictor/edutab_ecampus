import React from 'react';
import './css/Navbar.css';

function Navbar () {
    return (
        <nav>
            <h1>Scratch Programming Course</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/basic-concepts">Basic Concepts</a></li>
                <li><a href="/advanced-concepts">Advanced Concepts</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;