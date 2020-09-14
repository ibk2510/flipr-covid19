import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="card shadow br">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img src="/images/covid.jpeg" alt="covid-19" />
              </div>
              <div className="col-md">
                <h1>COVID-19 Pandemic</h1>
              </div>
              <div className="col">
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            {/*about covid */}
            <div className="card br shadow">
              <div className="card-body">
                <h3 class="card-title">COVID-19</h3>
                <p class="card-text">
                  Coronavirus disease 2019 (COVID‑19) is an infectious disease
                  caused by severe acute respiratory syndrome coronavirus 2
                  (SARS-CoV-2).[10] It was first identified in December 2019 in
                  Wuhan, Hubei, China, and has resulted in an ongoing pandemic.
                  As of 14 September 2020, more than 29 million cases have been
                  reported across 188 countries and territories with more than
                  924,000 deaths; more than 19.6 million people have recovered
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card br shadow">
              <div className="card-body">
                <h3 class="card-title">Symptoms</h3>
                <h6 class="card-subtitle mb-2 text-muted">Most Common Symptoms</h6>
                <ul className="card-text">
                  <li>Fever</li>
                  <li>Dry cough</li>
                  <li>Tiredness</li>
                </ul>
                <h6 class="card-subtitle mb-2 text-muted">Less Common Symptoms</h6>
                <ul>
                  <li>Aches and Pains</li>
                  <li>Sore throat</li>
                  <li>Diarrhoea</li>
                  <li>Conjunctivitis</li>
                  <li>Headache</li>
                  <li>Loss of taste or smell</li>
                  <li>A Rash on skin, or discolouration of fingers or toes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
