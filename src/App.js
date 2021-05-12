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
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Personal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Users</a>
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
                    <Route path="/home" exact>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
