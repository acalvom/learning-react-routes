import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/personal" className="nav-link">
                        Personal
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
