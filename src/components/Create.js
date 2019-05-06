import React, { Component } from 'react';
import { Redirect } from 'react-router'
import axios from "axios";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      amount: 0,
      redirectToNewPage: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    return axios.post('http://' + process.env.REACT_APP_API_SERVER_HOST + ':3001/api/charges', {
      description: this.state.description,
      amount: this.state.amount
    }).then(res => {
        this.setState({ redirectToNewPage: true });
        return res;
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    if (this.state.redirectToNewPage){
      return (
        <Redirect to={{
          pathname: '/charges'
        }}/>
      );
    } else {
      return (
        <div className="Create">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">New Charge</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" name="description" id="description" placeholder="Introduce description" required="required" value={this.state.description} onChange={this.handleInputChange} maxLength="255"/>
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="number" className="form-control" name="amount" id="amount" placeholder="Introduce quantity" required="required" value={this.state.amount} onChange={this.handleInputChange} min="1" max="9999" step="0.01"/>
                  <small id="amountHelp" className="form-text text-muted">Introduce a positive quantity.</small>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };
}

export default Create;
