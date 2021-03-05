import React, { Component } from "react";
import Home from "../Home/Home";
import Currencies from "../Currencies/Currencies"
import Price from '../Price/Price'
import "./App.css";
import {Route, Link} from 'react-router-dom';


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
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
          <Link to="/">Home</Link>
          <Link to="/currencies">Currency List</Link>

        </nav>
        <main>
          <Route path='/' component={Home}/>
          <Route path='/currencies' component={Currencies}/>
          <Route path="/price/:currency" component={Price} />
          {/* <Home /> */}
        </main>
      </div>
    );
  }
}

export default App;
