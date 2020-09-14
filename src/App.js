import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Notification from "./Components/Notification";
import CompareCases from "./Components/CompareCases";
import HospistalTab from "./Components/HospitalTabs";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/notifications" component={Notification} />
          <Route exact path="/stats" component={CompareCases} />
          <Route exact path="/hospitals" component={HospistalTab} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
