import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hospital from "./Hospital";
import MedicalBeds from "./MedicalBeds";

class HospitalTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  toggleBox1 = () => {
    this.setState({ isActive: true });
  };
  toggleBox2 = () => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="card shadow br my-2">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <Link
                  onClick={this.toggleBox2}
                  className={`nav-link ${this.state.isActive ? "" : "active"}`}
                  to="/hospitals"
                >
                  Hospitals & beds
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  onClick={this.toggleBox1}
                  className={`nav-link ${!this.state.isActive ? "" : "active"}`}
                  to="/hospitals/medicalclgbeds"
                >
                  Medical Colleges & beds
                </Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/hospitals" component={Hospital}></Route>
              <Route
                exact
                path="/hospitals/medicalclgbeds"
                component={MedicalBeds}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default HospitalTabs;
