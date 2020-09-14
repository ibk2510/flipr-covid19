import React, { Component } from 'react';
import Datatable from "react-bs-datatable";


class Hospital extends Component {
    constructor(){
        super();
        this.state = {
            data : null 
        }
        this.headers = [
            { title: "S No", prop: "id" },
            { title: "State Name", prop: "state" },
            { title: "Rural Hospitals", prop: "ruralHospitals" },
            { title: "Rural Beds", prop: "ruralBeds" },
            { title: "Urban Hospitals", prop: "urbanHospitals" },
            { title: "Urban Beds", prop: "urbanBeds" },
            { title: "Total Hospitals", prop: "totalHospitals" },
            { title: "Total Beds(State Wise)", prop: "totalBeds" },

        ];
    }
    componentDidMount() {
    fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
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
    const all_hospitals = this.state.data.regional.map((obj, index) => {
      return { ...obj, id: index + 1 };
    });
        return (
            <div className="container-fluid">
            <div className="card shadow">
            <Datatable tableHeaders={this.headers} tableBody={all_hospitals} rowsPerPage={10}/>
            </div>
            </div>
        );
    }
}
 
export default Hospital;