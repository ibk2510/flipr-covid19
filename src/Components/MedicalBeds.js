import React, { Component } from "react";
import Datatable from "react-bs-datatable";

class MedicalBeds extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.headers = [
      { title: "S No", prop: "id" },
      { title: "State Name", prop: "state", filterable: true },
      { title: "Institute Name", prop: "name" },
      { title: "City", prop: "city" },
      { title: "Type", prop: "ownership" },
      { title: "Admission Capacity", prop: "admissionCapacity" },
      { title: "Hospital Beds", prop: "hospitalBeds" },
    ];
  }
  componentDidMount() {
    fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
      .then((res) => res.json())
      .then((findres) => {
        this.setState({ data: findres.data });
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
    const all_clgs = this.state.data.medicalColleges.map((obj, index) => {
      return { ...obj, id: index + 1 };
    });
    return (
      <div className="container-fluid">
      <div className="card shadow br ctr contactcard">
      <h2>Medical Colleges & Beds</h2>
      </div>
        <div className="card shadow">
          <div className="table-responsive">
            <Datatable
              tableHeaders={this.headers}
              tableBody={all_clgs}
              rowsPerPage={10}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalBeds;
