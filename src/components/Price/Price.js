import React, { Component } from "react";
import "./Price.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

class Price extends Component {
  componentDidMount() {
    const currency = this.props.match.params.currency;
    const url = `${coindeskURL}${currency}.json`
    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(response => {
        let newPrice = response.bpi[currency].rate;
        this.props.setPrice(newPrice)
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Bitcoin price in {this.props.match.params.currency}</h1>
        <div className="price">{this.props.price}</div>
      </div>
    );
  }
}

export default Price;
