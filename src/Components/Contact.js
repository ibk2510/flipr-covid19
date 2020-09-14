import React, { Component } from "react";
import Datatable from "react-bs-datatable";
import { FaEnvelope, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.headers = [
      { title: "S No", prop: "id" },
      { title: "State", prop: "loc" },
      { title: "Number", prop: "number" },
    ];
  }

  componentDidMount() {
    fetch("https://api.rootnet.in/covid19-in/contacts")
      .then((res) => res.json())
      .then((findres) => {
        this.setState({ data: findres.data.contacts });
        console.log(findres);
      });
  }
  render() {
    if (this.state.data == null) {
      return (
        <div>
          <h2>Fetching data....</h2>
        </div>
      );
    }
    const all_states = this.state.data.regional.map((obj, index) => {
      return { ...obj, id: index + 1 };
    });
    return (
      <div className="container">
        <div className="card shadow ctr br">
          <div className="row">
            <div className="col-sm">
              <div className="card shadow br">
                <h3>Contact Number</h3>
                <h6>{this.state.data.primary.number}</h6>
              </div>
            </div>
            <div className="col-sm">
              <div className="card shadow br">
                <h4>Toll-Free Number</h4>
                <h6>{this.state.data.primary["number-tollfree"]}</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <FaTwitterSquare />
            </div>
            <div className="col-sm">
              <FaEnvelope />
            </div>
            <div className="col-sm">
              <FaFacebookSquare />
            </div>
          </div>
        </div>
        <div className="card shadow br">
          <div className="table-responsive mx-0 my-2">
            <Datatable
              tableHeaders={this.headers}
              tableBody={all_states}
              rowsPerPage={10}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
