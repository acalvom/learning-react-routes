import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Personal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Usuarios</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default App;
