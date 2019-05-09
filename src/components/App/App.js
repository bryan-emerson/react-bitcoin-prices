import React, { Component } from "react"
import Currencies from "../Currencies/Currencies"
import Home from "../Home/Home"
import Price from "../Price/Price"
import "./App.css"
import { Route, Link, Switch, Redirect } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: null
    }
    this.setPrice = this.setPrice.bind(this)
  }

  setPrice(price) {
    this.setState({ price: price })
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
          <Link to="/currencies">Currency List</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/currencies"
              render={routerProps => (
                <Currencies {...this.state} {...routerProps} />
              )}
            />
            <Route
              path="/price/:currency"
              render={routerProps => (
                <Price
                  setPrice={this.setPrice}
                  {...this.state}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/currency"
              render={() => <Redirect to="/currencies" />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
