import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      charges: [],
      err: false
    };
  }

  componentDidMount() {
    this.loadCharges();
  }

  loadCharges() {
    axios.get('http://' + process.env.REACT_APP_API_SERVER_HOST + ':3001/api/charges')
    .then(res => this.setState({ charges: res.data }))
    .catch(err => this.setState({ err }));
  }

  handleDelete(id) {
    axios.delete('http://' + process.env.REACT_APP_API_SERVER_HOST + ':3001/api/charges/' + id)
    .then(res => {
        this.removeCharge(id);
        return res;
    }).catch(err => err);
  }

  removeCharge(id) {
    let currentCharges = this.state.charges.filter(function(currentCharge) { return currentCharge.id !== id });
    this.setState({ charges: currentCharges });
  }

  render() {
    if (this.state.err) {
      return (
        <div className="Home">
          <div className="container-fluid">
            <h3>Error loading page.</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Home">
          <h3>Charges list</h3>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.charges.map(charge =>
                <tr key={charge.id}>
                  <td>{charge.description}</td>
                  <td className="text-danger">- {charge.amount} €</td>
                  <td>
                    <Link to={`/charges/show/${charge.id}`}>
                      <button className="btn btn-default"><span className="glyphicon glyphicon-plus"></span>Show</button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => { this.handleDelete(charge.id) }} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="container-fluid">
            <Link to="/charges/new">
              <button className="btn btn-success" type="button">New charge</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Home;
