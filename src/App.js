import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Personal from "./components/Personal";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <hr/>
                <Switch>
                    {/* Para redirigir a la ruta que encaja con la URL*/}
                    <Route path="/personal"><Personal/></Route>
                    <Route path="/users"><Users/></Route>
                    <Route path="/" exact><Home/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
