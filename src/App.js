import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Civilizations from "./components/Civilizations";
import Personal from "./components/Personal";
import Navbar from "./components/Navbar";
import CivilizationDetails from "./components/CivilizationDetail";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <hr/>
                <Switch>
                    {/* Para redirigir a la ruta que encaja con la URL*/}
                    <Route path="/personal"><Personal/></Route>
                    <Route path="/civilizations/:name"><CivilizationDetails/></Route>
                    <Route path="/civilizations"><Civilizations/></Route>
                    <Route path="/" exact><Home/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
