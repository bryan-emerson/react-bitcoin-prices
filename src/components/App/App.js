import React, { Component } from "react";
import Home from "../Home/Home";
import Currencies from "../Currencies/Currencies";
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
          </Link>
          <Link to="/currencies">
            <h1>Bitcoin prices</h1>
          </Link>
        </nav>
        <main>
          <Route path="/" component={Home} />
          <Route path="/currencies" component={Currencies} />
        </main>
      </div>
    );
  }
}

export default App;
