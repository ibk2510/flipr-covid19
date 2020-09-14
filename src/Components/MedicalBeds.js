import React, { Component } from 'react';
import Datatable from "react-bs-datatable";

class MedicalBeds extends Component {
    constructor(){
        super();
        this.state = {
            data : null 
        }
        this.headers = [
            { title: "S No", prop: "id" },
            { title: "State Name", prop: "state" },
            { title: "Institute Name", prop: "" },
            { title: "City", prop: "" },
            { title: "Type", prop: "" },
            { title: "Admission Capacity", prop: "" },
            { title: "Hospital Beds", prop: "" },
        ];
    }
    render() { 
        return ( 
            <div className="container">
            <h1>medical beds</h1>
            </div>
         );
    }
}
 
export default MedicalBeds;