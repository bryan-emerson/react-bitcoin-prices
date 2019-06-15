import React, { Component } from "react";
import Home from "../Home/Home";
import "./App.css";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Currencies from "../Currencies/Currencies";
import Price from "../Price/Price";

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
          <h1>Bitcoin prices</h1>
          <Link to="/currencies">Currencies</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/currencies" component={Currencies} />
            <Route
              path="/currency"
              render={() => <Redirect to="/currencies" />}
            />
            <Route
              path="/price/:currency"
              render={props => (
                <Price setPrice={this.setPrice} {...props} {...this.state} />
                // <Price setPrice={this.setPrice} history={props.history} match={props.match} location={props.location} {...this.state} />
              )}
            />
          </Switch>
          {/* <Home /> */}
        </main>
      </div>
    );
  }
}

export default App;
