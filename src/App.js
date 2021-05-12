import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Personal from "./components/Personal";

function App() {
    return (
        <Router>
            <div className="container">
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
                <hr/>
                <Switch>
                    {/* Para redirigir a la ruta que encaja con la URL*/}
                    <Route path="/personal">
                        <Personal/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
