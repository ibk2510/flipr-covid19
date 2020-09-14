import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/">
          COVID-19
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">
                Contact & Helpline
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/notifications">
                Notifications & Advisories
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/hospitals">
                Hospitals
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/stats">
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
