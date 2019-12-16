import React, { Component } from "react";
import Home from "../Home/Home";
import Currencies from "../Currencies/Currencies.js";
import Price from "../Price/Price";
import "./App.css";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null
    };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(price) {
    this.setState({ price: price });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
              alt=""
            />
            <h1>Bitcoin prices</h1>
          </Link>
          <Link to="/currencies">All Currencies</Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/currencies" component={Currencies} />
          <Route
            path="/price/:currency"
            render={routerProps => (
              <Price
                {...routerProps}
                {...this.state}
                setPrice={this.setPrice}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
