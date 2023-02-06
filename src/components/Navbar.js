import React from "react";
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/basic-concepts">Basic Concepts</Link>
                </li>
                <li>
                    <Link to="/advanced-concepts">Advanced Concepts</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;