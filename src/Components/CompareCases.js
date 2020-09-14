import React, { Component } from "react";
import { LineChart } from 'react-chartkick';

class CompareCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_records: null,
      records: null,
      geographical_state: "None",
    };
  }

  componentDidMount() {
    fetch("https://api.airtable.com/v0/apps1LGyc0CJrFRu2/Imported%20table", {
      method: "GET",
      headers: {
        Authorization: "Bearer keyqf6toevoER2Wix",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json_res) => {
        console.log(json_res.records);
        this.setState({
          records: json_res.records,
          total_records: json_res.records,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      geographical_state: e.target.value,
    });

    console.log(e.target.value, "is the current selected state");

    const current_state = e.target.value;
    const current_records = [...this.state.total_records];
    const records_to_display = [];
    console.log(current_records, "are the current records");

    for (let obj of current_records) {
      if (obj.fields.state) {
        console.log(obj.fields.state, current_state);
        if (obj.fields.state == current_state) {
          records_to_display.push(obj);
        }
      }
    }

    console.log(records_to_display, "are the filtered records");
    this.setState({
      records: records_to_display,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card br shadow">
              <div className="card-body">
                <h1>Charts</h1>
                <h6 className="card-text">
                  The Graphical Representation of Deaths
                </h6>
                <img src="/images/3.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card br shadow">
              <div className="card-body">
                <h5 className="card-subtitle">State</h5>
                <select
                  class="custom-select"
                  value={this.state.geographical_state}
                  onChange={this.handleChange}
                >
                  <option value="None" selected>
                    Select One
                  </option>
                  <option value="Andaman Nicobar Islands">
                    Andaman Nicobar Islands
                  </option>
                  <option value="Andra Pradesh">Andra Pradesh</option>
                  <option value="Arunachal pradesh">Arunachal pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Madhya Pardesh">Madhya Pardesh</option>
                  <option value="Maharastra">Maharastra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <br />
                <br />
                <h5 className="card-subtitle">Age Group</h5>
                <select class="custom-select">
                  <option selected>Open this select menu</option>
                  <option value="1">0-9</option>
                  <option value="2">10-19</option>
                  <option value="3">20-29</option>
                  <option value="4">30-39</option>
                  <option value="5">40-49</option>
                  <option value="6">50-59</option>
                  <option value="7">60-69</option>
                  <option value="8">70+</option>
                </select>
                <br />

                <br />
                <h5 className="card-subtitle">Gender</h5>
                <select class="custom-select">
                  <option selected>Open this select menu</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Unknown</option>
                </select>
              </div>
            </div>
            <div className="row-sm">
              <div className="card br shadow">
                <div className="card-body">
                  <h4>From</h4>
                  <input type="date" name="" id="" />
                  <h4>To</h4>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
            <div className="row-sm">
              <div className="card br shadow">
                <div className="card-body">
                  <button type="button" class="btn btn-primary">
                    Download
                  </button>
                  <br />
                  <br />
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Mailid To Send"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-danger" type="button">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompareCases;
