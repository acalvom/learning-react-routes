import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mt-3">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <NavLink to="/personal" className="nav-link" activeClassName="active">Personal</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/civilizations" className="nav-link" activeClassName="active">Civilizations</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
