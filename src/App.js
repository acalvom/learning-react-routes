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
                <hr/>
                <Switch>
                    {/* Para redirigir a la ruta que encaja con la URL*/}
                    <Route path="/personal">
                        Personal page
                    </Route>
                    <Route path="/users">
                        Users page
                    </Route>
                    <Route path="/home" exact>
                        Home page
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
