import React, { Component } from "react";
import axios from "axios";
import "./Price.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

class Price extends Component {
  componentDidMount() {
    const currency = this.props.match.params.currency;
    const url = `${coindeskURL}${currency}.json`;

    axios
      .get(url)
      .then(response => {
        let newPrice = response.data.bpi[currency].rate;
        this.props.setPrice(newPrice);
      })
      .catch(err => {
        console.error(err);
      });
  }

  goHomeViaHistory = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Bitcoin price in {this.props.match.params.currency}</h1>
        <div className="price">{this.props.price}</div>
        <button onClick={this.goHomeViaHistory}>{"Go Home via History"}</button>
      </div>
    );
  }
}

export default Price;
