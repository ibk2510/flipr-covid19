import React, { Component } from 'react';
import Datatable from "react-bs-datatable";

class Notification extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
        this.headers = [
            { title: "S No", prop: "id" },
            { title: "Date", prop: "" },
            { title: "Notification Title", prop: "title" },
            { title: "Link", prop: "link" },
        ]
    }
    componentDidMount(){
        fetch("https://api.rootnet.in/covid19-in/notifications").
        then(res => res.json()).
        then(findres => {
            this.setState({data : findres.data})
            console.log(findres);
        })
    }
    
    render() 
    { 
    if (this.state.data == null) {
      return (
        <div>
          <h2>Fetching data....</h2>
        </div>
      );
    }
    const all_notifiations = this.state.data.notifications.map((obj, index) => {
      return { ...obj, id: index + 1 };
    });
        return ( 
            <div className="container">
            <div className="card shadow">
            <Datatable tableHeaders={this.headers} tableBody={all_notifiations} rowsPerPage={7}/>
            </div>
            </div>
        );
    }
}
 
export default Notification;